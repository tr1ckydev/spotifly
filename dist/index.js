import { Musixmatch } from "./musixmatch.js";
export class Spotifly {
    token = "";
    tokenExpirationTimestampMs = -1;
    async refreshToken() {
        if (this.tokenExpirationTimestampMs > Date.now())
            return;
        const response = await (await fetch("https://open.spotify.com/get_access_token")).json();
        this.token = "Bearer " + response.accessToken;
        this.tokenExpirationTimestampMs = response.accessTokenExpirationTimestampMs;
    }
    async fetch(url) {
        await this.refreshToken();
        return (await fetch(url, { headers: { authorization: this.token } })).json();
    }
    async getHomepage() {
        return this.fetch(`https://api-partner.spotify.com/pathfinder/v1/query?operationName=home&variables=%7B%22timeZone%22%3A%22${encodeURIComponent(Intl.DateTimeFormat().resolvedOptions().timeZone)}%22%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%22bbc1b1a421216c1299382b076c1aa8d52b91a0dfc91a4ae431a05b0a43a721e0%22%7D%7D`);
    }
    async getTrack(id) {
        return this.fetch(`https://api-partner.spotify.com/pathfinder/v1/query?operationName=getTrack&variables=%7B%22uri%22%3A%22spotify%3Atrack%3A${id}%22%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%22d208301e63ccb8504831114cb8db1201636a016187d7c832c8c00933e2cd64c6%22%7D%7D`);
    }
    async getRelatedTrackArtists(id) {
        return this.fetch(`https://api-partner.spotify.com/pathfinder/v1/query?operationName=getRichTrackArtists&variables=%7B%22uri%22%3A%22spotify%3Atrack%3A${id}%22%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%22b73a738f01c30e4dd90bc7e4c0e59f4d690a74f2b0c48a2eabbfd798a4a7e76a%22%7D%7D`);
    }
    async getArtist(id) {
        return this.fetch(`https://api-partner.spotify.com/pathfinder/v1/query?operationName=queryArtistOverview&variables=%7B%22uri%22%3A%22spotify%3Aartist%3A${id}%22%2C%22locale%22%3A%22%22%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%22b82fd661d09d47afff0d0239b165e01c7b21926923064ecc7e63f0cde2b12f4e%22%7D%7D`);
    }
    async getAlbum(id, limit = 50) {
        return this.fetch(`https://api-partner.spotify.com/pathfinder/v1/query?operationName=getAlbum&variables=%7B%22uri%22%3A%22spotify%3Aalbum%3A${id}%22%2C%22locale%22%3A%22%22%2C%22offset%22%3A0%2C%22limit%22%3A${limit}%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%2246ae954ef2d2fe7732b4b2b4022157b2e18b7ea84f70591ceb164e4de1b5d5d3%22%7D%7D`);
    }
    async getPlaylist(id, limit = 50) {
        return this.fetch(`https://api-partner.spotify.com/pathfinder/v1/query?operationName=fetchPlaylist&variables=%7B%22uri%22%3A%22spotify%3Aplaylist%3A${id}%22%2C%22offset%22%3A0%2C%22limit%22%3A${limit}%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%22e578eda4f77aae54294a48eac85e2a42ddb203faf6ea12b3fddaec5aa32918a3%22%7D%7D`);
    }
    async getUser(id, config = { playlistLimit: 10, artistLimit: 10, episodeLimit: 10 }) {
        return this.fetch(`https://spclient.wg.spotify.com/user-profile-view/v3/profile/${id}?playlist_limit=${config.playlistLimit}&artist_limit=${config.artistLimit}&episode_limit=${config.episodeLimit}&market=from_token`);
    }
    async getSection(id) {
        return this.fetch(`https://api-partner.spotify.com/pathfinder/v1/query?operationName=homeSection&variables=%7B%22uri%22%3A%22spotify%3Asection%3A${id}%22%2C%22timeZone%22%3A%22${encodeURIComponent(Intl.DateTimeFormat().resolvedOptions().timeZone)}%22%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%226585470c10e5d55914901477e4669bc0b87296c6bcd2b10c96a736d14b194dce%22%7D%7D`);
    }
    async getPodcast(id) {
        return this.fetch(`https://api-partner.spotify.com/pathfinder/v1/query?operationName=queryShowMetadataV2&variables=%7B%22uri%22%3A%22spotify%3Ashow%3A${id}%22%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%22ac51248fe153075d9bc237ea1054f16c1b4653b641758864afef8b40b4c25194%22%7D%7D`);
    }
    async getPodcastEpisodes(id, limit = 50) {
        return this.fetch(`https://api-partner.spotify.com/pathfinder/v1/query?operationName=queryPodcastEpisodes&variables=%7B%22uri%22%3A%22spotify%3Ashow%3A${id}%22%2C%22offset%22%3A0%2C%22limit%22%3A${limit}%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%22c2f23625b8a2dd5791b06521700d9500461e0489bd065800b208daf0886bdb60%22%7D%7D`);
    }
    async getEpisode(id) {
        return this.fetch(`https://api-partner.spotify.com/pathfinder/v1/query?operationName=getEpisodeOrChapter&variables=%7B%22uri%22%3A%22spotify%3Aepisode%3A${id}%22%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%2293d19545cfb4cde00b33a2e32e925943980fba398dbcd15e9af603f11d0464a7%22%7D%7D`);
    }
    async searchAll(terms, limit = 10) {
        return this.fetch(`https://api-partner.spotify.com/pathfinder/v1/query?operationName=searchDesktop&variables=%7B%22searchTerm%22%3A%22${encodeURIComponent(terms)}%22%2C%22offset%22%3A0%2C%22limit%22%3A${limit}%2C%22numberOfTopResults%22%3A5%2C%22includeAudiobooks%22%3Atrue%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%2260efc08b8017f382e73ba2e02ac03d3c3b209610de99da618f36252e457665dd%22%7D%7D`);
    }
    async searchTracks(terms, limit = 10) {
        return this.fetch(`https://api-partner.spotify.com/pathfinder/v1/query?operationName=searchTracks&variables=%7B%22searchTerm%22%3A%22${encodeURIComponent(terms)}%22%2C%22offset%22%3A0%2C%22limit%22%3A${limit}%2C%22numberOfTopResults%22%3A20%2C%22includeAudiobooks%22%3Afalse%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%221d021289df50166c61630e02f002ec91182b518e56bcd681ac6b0640390c0245%22%7D%7D`);
    }
    async searchAlbums(terms, limit = 10) {
        return this.fetch(`https://api-partner.spotify.com/pathfinder/v1/query?operationName=searchAlbums&variables=%7B%22searchTerm%22%3A%22${encodeURIComponent(terms)}%22%2C%22offset%22%3A0%2C%22limit%22%3A${limit}%2C%22numberOfTopResults%22%3A20%2C%22includeAudiobooks%22%3Atrue%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%2237197f541586fe988541bb1784390832f0bb27e541cfe57a1fc63db3598f4ffd%22%7D%7D`);
    }
    async searchPlaylists(terms, limit = 10) {
        return this.fetch(`https://api-partner.spotify.com/pathfinder/v1/query?operationName=searchPlaylists&variables=%7B%22searchTerm%22%3A%22${encodeURIComponent(terms)}%22%2C%22offset%22%3A0%2C%22limit%22%3A${limit}%2C%22numberOfTopResults%22%3A20%2C%22includeAudiobooks%22%3Atrue%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%2287b755d95fd29046c72b8c236dd2d7e5768cca596812551032240f36a29be704%22%7D%7D`);
    }
    async searchArtists(terms, limit = 10) {
        return this.fetch(`https://api-partner.spotify.com/pathfinder/v1/query?operationName=searchArtists&variables=%7B%22searchTerm%22%3A%22${encodeURIComponent(terms)}%22%2C%22offset%22%3A0%2C%22limit%22%3A${limit}%2C%22numberOfTopResults%22%3A20%2C%22includeAudiobooks%22%3Atrue%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%224e7cdd33163874d9db5e08e6fabc51ac3a1c7f3588f4190fc04c5b863f6b82bd%22%7D%7D`);
    }
    async searchUsers(terms, limit = 10) {
        return this.fetch(`https://api-partner.spotify.com/pathfinder/v1/query?operationName=searchUsers&variables=%7B%22searchTerm%22%3A%22${encodeURIComponent(terms)}%22%2C%22offset%22%3A0%2C%22limit%22%3A${limit}%2C%22numberOfTopResults%22%3A20%2C%22includeAudiobooks%22%3Atrue%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%22f82af76fbfa6f57a45e0f013efc0d4ae53f722932a85aca18d32557c637b06c8%22%7D%7D`);
    }
    async searchPodcasts(terms, limit = 10) {
        return this.fetch(`https://api-partner.spotify.com/pathfinder/v1/query?operationName=searchFullEpisodes&variables=%7B%22searchTerm%22%3A%22${encodeURIComponent(terms)}%22%2C%22offset%22%3A0%2C%22limit%22%3A${limit}%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%22d973540aa4cb9983213c17082ec814b9fb85155c58b817325be9243691077e43%22%7D%7D`);
    }
    async getTrackLyrics(id) {
        const track = await this.getTrack(id);
        return Musixmatch.searchLyrics(`${track.data.trackUnion.name} ${track.data.trackUnion.artistsWithRoles.items[0].artist.profile.name}`);
    }
    async extractImageColors(...urls) {
        return this.fetch(`https://api-partner.spotify.com/pathfinder/v1/query?operationName=fetchExtractedColors&variables=%7B%22uris%22%3A${encodeURIComponent(JSON.stringify(urls))}%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%22d7696dd106f3c84a1f3ca37225a1de292e66a2d5aced37a66632585eeb3bbbfa%22%7D%7D`);
    }
}
export { Parse } from "./parse.js";
export { Musixmatch };
