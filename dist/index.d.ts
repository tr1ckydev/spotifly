import { Musixmatch } from "./musixmatch.js";
import { SpotifyAlbum, SpotifyArtist, SpotifyEpisode, SpotifyExtractedColors, SpotifyHome, SpotifyPlaylist, SpotifyPodcast, SpotifyPodcastEpisodes, SpotifyRelatedTrackArtists, SpotifySearchAlbums, SpotifySearchAll, SpotifySearchArtists, SpotifySearchPlaylists, SpotifySearchPodcasts, SpotifySearchTracks, SpotifySearchUsers, SpotifySection, SpotifyTrack, SpotifyUser } from "./types/index";
export declare class Spotifly {
    private token;
    private tokenExpirationTimestampMs;
    private refreshToken;
    private fetch;
    getHomepage(): Promise<SpotifyHome>;
    getTrack(id: string): Promise<SpotifyTrack>;
    getRelatedTrackArtists(id: string): Promise<SpotifyRelatedTrackArtists>;
    getArtist(id: string): Promise<SpotifyArtist>;
    getAlbum(id: string, limit?: number): Promise<SpotifyAlbum>;
    getPlaylist(id: string, limit?: number): Promise<SpotifyPlaylist>;
    getUser(id: string, config?: {
        playlistLimit: number;
        artistLimit: number;
        episodeLimit: number;
    }): Promise<SpotifyUser>;
    getSection(id: string): Promise<SpotifySection>;
    getPodcast(id: string): Promise<SpotifyPodcast>;
    getPodcastEpisodes(id: string, limit?: number): Promise<SpotifyPodcastEpisodes>;
    getEpisode(id: string): Promise<SpotifyEpisode>;
    searchAll(terms: string, limit?: number): Promise<SpotifySearchAll>;
    searchTracks(terms: string, limit?: number): Promise<SpotifySearchTracks>;
    searchAlbums(terms: string, limit?: number): Promise<SpotifySearchAlbums>;
    searchPlaylists(terms: string, limit?: number): Promise<SpotifySearchPlaylists>;
    searchArtists(terms: string, limit?: number): Promise<SpotifySearchArtists>;
    searchUsers(terms: string, limit?: number): Promise<SpotifySearchUsers>;
    searchPodcasts(terms: string, limit?: number): Promise<SpotifySearchPodcasts>;
    getTrackLyrics(id: string): Promise<string[]>;
    extractImageColors(...urls: string[]): Promise<SpotifyExtractedColors>;
}
export { Parse } from "./parse.js";
export { Musixmatch };
