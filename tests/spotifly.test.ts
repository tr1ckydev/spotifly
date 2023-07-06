import { expect, test } from "bun:test";
import { Spotifly } from "../src";

const sp = new Spotifly(process.env.SPOTIFY_COOKIE);

test("getHomepage", async () => {
    const home = await sp.getHomepage();
    expect(home.data.home.greeting.text).toStartWith("Good");
});

test("getTrack", async () => {
    const track = await sp.getTrack("7MXVkk9YMctZqd1Srtv4MB");
    expect(track.data.trackUnion.name).toBe("Starboy");
});

test("getTrackCredits", async () => {
    const track = await sp.getTrackCredits("7MXVkk9YMctZqd1Srtv4MB");
    expect(track.trackTitle).toBe("Starboy");
});

test("getRelatedTrackArtists", async () => {
    const related = await sp.getRelatedTrackArtists("7MXVkk9YMctZqd1Srtv4MB");
    expect(related.data.trackUnion.otherArtists.items[0].artist.profile.name).toBe("Daft Punk");
});

test("getArtist", async () => {
    const artist = await sp.getArtist("1Xyo4u8uXC1ZmMpatF05PJ");
    expect(artist.data.artistUnion.profile.name).toBe("The Weeknd");
});

test("getAlbum", async () => {
    const album = await sp.getAlbum("2ODvWsOgouMbaA5xf0RkJe", 0);
    expect(album.data.albumUnion.name).toBe("Starboy");
});

test("getPlaylist", async () => {
    const playlist = await sp.getPlaylist("37i9dQZF1DWWY64wDtewQt", 0);
    expect(playlist.data.playlistV2.name).toBe("phonk");
});

test("getPlaylistMetadata", async () => {
    const playlist = await sp.getPlaylistMetadata("37i9dQZF1DWWY64wDtewQt", 0);
    expect(playlist.data.playlistV2.name).toBe("phonk");
});

test("getPlaylistContents", async () => {
    const playlist = await sp.getPlaylistContents("37i9dQZF1DWWY64wDtewQt", 0);
    expect(playlist.data.playlistV2.content.items).toBeArray();
});

test("getUser", async () => {
    const user = await sp.getUser("p2ztvcigo8b6m046a4gbczu3w");
    expect(user.name).toBe("meow");
});

test("getSection", async () => {
    const section = await sp.getSection("0JQ5DAuChZYPe9iDhh2mJz");
    expect(section.data.homeSections.__typename).toBe("HomeSectionCollection");
});

test("getPodcast", async () => {
    const podcast = await sp.getPodcast("1VXcH8QHkjRcTCEd88U3ti");
    expect(podcast.data.podcastUnionV2.name).toBe("TED Talks Daily");
});

test("getPodcastEpisodes", async () => {
    const episodes = await sp.getPodcastEpisodes("1VXcH8QHkjRcTCEd88U3ti", 0);
    expect(episodes.data.podcastUnionV2.name).toBe("TED Talks Daily");
});

test("getEpisode", async () => {
    const episode = await sp.getEpisode("2NrrQkqYJCFusdaV3yESp8");
    expect(episode.data.episodeUnionV2.name).toBe("Stories of the year | After Hours");
});

test("searchAll", async () => {
    const search = await sp.searchAll("closer chainsmokers", 1);
    expect(search.data.searchV2.tracksV2.items[0].item.data.name).toBe("Closer");
});

test("searchTracks", async () => {
    const search = await sp.searchTracks("closer chainsmokers", 1);
    expect(search.data.searchV2.tracksV2.items[0].item.data.name).toBe("Closer");
});

test("searchAlbums", async () => {
    const search = await sp.searchAlbums("starboy weeknd", 1);
    expect(search.data.searchV2.albums.items[0].data.name).toBe("Starboy");
});

test("searchPlaylists", async () => {
    const search = await sp.searchPlaylists("phonk", 1);
    expect(search.data.searchV2.playlists.items[0].data.name).toBe("phonk");
});

test("searchArtists", async () => {
    const search = await sp.searchArtists("weeknd", 1);
    expect(search.data.searchV2.artists.items[0].data.profile.name).toBe("The Weeknd");
});

test("searchUsers", async () => {
    const search = await sp.searchUsers("meow", 1);
    expect(search.data.searchV2.users.items[0].data.displayName).toBe("MEOW!");
});

test("searchPodcasts", async () => {
    const search = await sp.searchPodcasts("ted talks daily", 1);
    expect(search.data.searchV2.episodes.items[0].data.podcastV2.data.name).toBe("TED Talks Daily");
});

test("getTrackLyrics", async () => {
    const lyrics = await sp.getTrackLyrics("7MXVkk9YMctZqd1Srtv4MB");
    expect(lyrics[0]).toBe("I′m tryna put you in the worst mood, ah");
});

test("extractImageColors", async () => {
    const colors = await sp.extractImageColors("https://i.scdn.co/image/ab67616d00001e024718e2b124f79258be7bc452");
    expect(colors.data.extractedColors[0].colorRaw.hex).toBe("#A00030");
});

test("getMyProfile", async () => {
    const profile = await sp.getMyProfile();
    expect(profile.id).toBeString();
});

test("getMyLibrary", async () => {
    const library = await sp.getMyLibrary();
    expect(library.data.me.libraryV2.page.items.length).toBeGreaterThan(1);
});

test("getMyProductState", async () => {
    const state = await sp.getMyProductState();
    expect(state.product).toBeString();
});

test("getTrackColorLyrics", async () => {
    const lyrics = await sp.getTrackColorLyrics("7MXVkk9YMctZqd1Srtv4MB");
    expect(lyrics.lyrics.lines[0].words).toBe("I'm tryna put you in the worst mood, ah");
});

test("getMyLikedSongs", async () => {
    const songs = await sp.getMyLikedSongs();
    expect(songs.data.me.library.tracks.items).toBeArray();
});