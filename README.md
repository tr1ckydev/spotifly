# ![](https://open.spotifycdn.com/cdn/images/favicon32.b64ecc03.png) `spotifly.js`

## Spotify with wings !

Spotify library in typescript without using the [Spotify Web API](https://developer.spotify.com/documentation/web-api).

- No authentication required.
- Super fast like the Web API.
- Lightweight with zero dependencies.
- Strongly typed API functions.
- Automatic internal token refreshing.

...along with a Musixmatch API module. Works without any authentication too.



## 📦 Get Started

- ### Requirement

  `node.js (>=17.5.0)` or `bun` runtime.

- ### Installation

  `npm i spotifly.js` or `bun i spotifly.js`

- ### Usage

  ```typescript
  import { Spotifly } from "spotifly";
  
  const sp = new Spotifly();
  const track = await sp.getTrack("abcdefghijk");
  console.log(track);
  ```



## 📖 Documentation

- `Spotifly` module
  - `getHomepage`
  - `getTrack`
  - `getRelatedTrackArtists`
  - `getArtist`
  - `getAlbum`
  - `getPlaylist`
  - `getUser`
  - `getSection`
  - `getPodcast`
  - `getPodcastEpisodes`
  - `getEpisode`
  - `searchAll`
  - `searchTracks`
  - `searchAlbums`
  - `searchPlaylists`
  - `searchArtists`
  - `searchUsers`
  - `searchPodcasts`
  - `getTrackLyrics`
  - `extractImageColors`
- `Musixmatch` module
  - `search`
  - `getLyricsFromUrl`
  - `searchLyrics`
- `Parse` module
  - `urlToId`
  - `uriToId`



## `Spotifly` module

The main module containing all the Spotify API functions.

- ### `getHomepage()`: *`Promise<SpotifyHome>`*

  Fetch the Spotify homepage data.

- ### `getTrack(id: string)`: *`Promise<SpotifyTrack>`*

  Fetch the details of the provided track id.

- ### `getRelatedTrackArtists(id: string)`: *`Promise<SpotifyRelatedTrackArtists>`*

  Fetch the related artists of the artist of the provided track id.

- ### `getArtist(id: string)`: *`Promise<SpotifyArtist>`*

  Fetch the details of the provided artist id.

- ### `getAlbum(id: string, limit?: number)`: *`Promise<SpotifyAlbum>`*

  Fetch the details of the provided album id, with optional limit for amount of tracks to fetch.

- ### `getPlaylist(id: string, limit?: number)`: *`Promise<SpotifyPlaylist>`*

  Fetch the details of the provided playlist id, with optional limit for amount of tracks to fetch.

- ### `getUser(id: string, config?:  { playlistLimit?: number, artistLimit?: number, episodeLimit?: number })`: *`Promise<SpotifyUser>`*

  Fetch the details of the provided user id, with optional limit for amount of tracks to fetch.

- ### `getSection(id: string)`: *`Promise<SpotifySection>`*

  Fetch the details of the provided section id.

- ### `getPodcast(id: string)`: *`Promise<SpotifyPodcast>`*

  Fetch the details of the provided show id.

- ### `getPodcastEpisodes(id: string, limit?: number)`: *`Promise<SpotifyPodcastEpisodes>`*

  Fetch the episodes of the provided show id, with optional limit for amount of episodes to fetch.

- ### `getEpisode(id: string)`: *`Promise<SpotifyEpisode>`*

  Fetch the details of the provided episode id.

- ### `searchAll(terms: string, limit?: number)`: *`Promise<SpotifySearchAll>`*

  Search the Spotify library with the terms provided, for all types of content, with optional limit for amount of search results to fetch.

- ### `searchTracks(terms: string, limit?: number)`: *`Promise<SpotifySearchTracks>`*

  Search the Spotify library with the terms provided, for tracks, with optional limit for amount of search results to fetch.

- ### `searchAlbums(terms: string, limit?: number)`: *`Promise<SpotifySearchAlbums>`*

  Search the Spotify library with the terms provided, for albums, with optional limit for amount of search results to fetch.

- ### `searchPlaylists(terms: string, limit?: number)`: *`Promise<SpotifySearchPlaylists>`*

  Search the Spotify library with the terms provided, for playlists, with optional limit for amount of search results to fetch.

- ### `searchArtists(terms: string, limit?: number)`: *`Promise<SpotifySearchArtists>`*

  Search the Spotify library with the terms provided, for artists, with optional limit for amount of search results to fetch.

- ### `searchUsers(terms: string, limit?: number)`: *`Promise<SpotifySearchUsers>`*

  Search the Spotify library with the terms provided, for users, with optional limit for amount of search results to fetch.

- ### `searchPodcasts(terms: string, limit?: number)`: *`Promise<SpotifySearchPodcasts>`*

  Search the Spotify library with the terms provided, for podcasts and shows, with optional limit for amount of search results to fetch.

- ### `getTrackLyrics(id: string)`: *`Promise<string[]>`*

  Fetch the lyrics of the provided track id through the `Musixmatch` module.

- ### `extractImageColors(...urls: string[])`: *`Promise<SpotifyExtractedColors>`*

  Extract raw, dark and light colors from the provided urls of images using Spotify API.



## `Musixmatch` module

The Musixmatch API module containing functions to search and fetch lyrics. No authentication needed.

- ### `search(terms: string)`: *`MusixmatchSearch[]`*

  Search the Musixmatch library with the terms provided.

- ### `getLyricsFromUrl(url: string)`: *`string[]`*

  Fetch the lyrics from a Musixmatch lyrics url (i.e. `musixmatch.com/lyrics/abc/xyz`).

- ### `searchLyrics(terms: string)`: *`string[]`*

  Fetch the lyrics of the top result after searching for the terms. Combination of the above two functions but faster.



## `Parse` module

The parsing module containing few utility functions.

- ### `urlToId(url: string)`: *`string`*

  Extract the id from an `open.spotify.com` url.

  

- ### `uriToId(uri: string)`: *`string`*

  Extract the id from a spotify uri (i.e. `spotify:track:abcdefghijk`).



## 📜 License

This repository uses MIT License. See LICENSE for full license text.
