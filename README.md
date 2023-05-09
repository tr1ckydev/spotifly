# ![](https://open.spotifycdn.com/cdn/images/favicon32.b64ecc03.png) `spotifly`

## Spotify with wings !

Spotify library in typescript without using the [Spotify Web API](https://developer.spotify.com/documentation/web-api).

- No authentication required.
- Super fast like the Web API.
- Lightweight with zero dependencies.
- Strongly typed API functions.
- Automatic internal token refreshing.

...along with a [Musixmatch API module](#musixmatch-module). Works without any authentication too.



## 📦 Get Started

- ### Requirement

  `node.js (>=17.5.0)` or `bun` runtime.

- ### Installation

  `npm i spotifly` or `bun i spotifly`

- ### Usage

  ```typescript
  import { Spotifly } from "spotifly";
  
  const sp = new Spotifly();
  const track = await sp.getTrack("abcdefghijk");
  console.log(track);
  ```



## 📖 Documentation

- [`Spotifly` module](#spotifly-module)
  - [`getHomepage`](#gethomepage-promisespotifyhome)
  - [`getTrack`](#gettrackid-string-promisespotifytrack)
  - [`getRelatedTrackArtists`](#getrelatedtrackartistsid-string-promisespotifyrelatedtrackartists)
  - [`getArtist`](#getartistid-string-promisespotifyartist)
  - [`getAlbum`](#getalbumid-string-limit-number-promisespotifyalbum)
  - [`getPlaylist`](#getplaylistid-string-limit-number-promisespotifyplaylist)
  - [`getUser`](#getuserid-string-config---playlistlimit-number-artistlimit-number-episodelimit-number--promisespotifyuser)
  - [`getSection`](#getsectionid-string-promisespotifysection)
  - [`getPodcast`](#getpodcastid-string-promisespotifypodcast)
  - [`getPodcastEpisodes`](#getpodcastepisodesid-string-limit-number-promisespotifypodcastepisodes)
  - [`getEpisode`](#getepisodeid-string-promisespotifyepisode)
  - [`searchAll`](#searchallterms-string-limit-number-promisespotifysearchall)
  - [`searchTracks`](#searchtracksterms-string-limit-number-promisespotifysearchtracks)
  - [`searchAlbums`](#searchalbumsterms-string-limit-number-promisespotifysearchalbums)
  - [`searchPlaylists`](#searchplayliststerms-string-limit-number-promisespotifysearchplaylists)
  - [`searchArtists`](#searchartiststerms-string-limit-number-promisespotifysearchartists)
  - [`searchUsers`](#searchusersterms-string-limit-number-promisespotifysearchusers)
  - [`searchPodcasts`](#searchpodcaststerms-string-limit-number-promisespotifysearchpodcasts)
  - [`getTrackLyrics`](#gettracklyricsid-string-promisestring)
  - [`extractImageColors`](#extractimagecolorsurls-string-promisespotifyextractedcolors)
- [`Musixmatch` module](#musixmatch-module)
  - [`search`](#searchterms-string-musixmatchsearch)
  - [`getLyricsFromUrl`](#getlyricsfromurlurl-string-string)
  - [`searchLyrics`](#searchlyricsterms-string-string)
- [`Parse` module](#parse-module)
  - [`urlToId`](#urltoidurl-string-string)
  - [`uriToId`](#uritoiduri-string-string)



## `Spotifly` module

The main module containing all the Spotify API functions.

- ### `getHomepage()`: [*`Promise<SpotifyHome>`*](https://github.com/tr1ckydev/spotifly/blob/main/src/types/home.ts)

  Fetch the Spotify homepage data.

- ### `getTrack(id: string)`: [*`Promise<SpotifyTrack>`*](https://github.com/tr1ckydev/spotifly/blob/main/src/types/track.ts)

  Fetch the details of the provided track id.

- ### `getRelatedTrackArtists(id: string)`: [*`Promise<SpotifyRelatedTrackArtists>`*](https://github.com/tr1ckydev/spotifly/blob/main/src/types/relatedTrackArtists.ts)

  Fetch the related artists of the artist of the provided track id.

- ### `getArtist(id: string)`: [*`Promise<SpotifyArtist>`*](https://github.com/tr1ckydev/spotifly/blob/main/src/types/artist.ts)

  Fetch the details of the provided artist id.

- ### `getAlbum(id: string, limit?: number)`: [*`Promise<SpotifyAlbum>`*](https://github.com/tr1ckydev/spotifly/blob/main/src/types/album.ts)

  Fetch the details of the provided album id, with optional limit for amount of tracks to fetch.

- ### `getPlaylist(id: string, limit?: number)`: [*`Promise<SpotifyPlaylist>`*](https://github.com/tr1ckydev/spotifly/blob/main/src/types/playlist.ts)

  Fetch the details of the provided playlist id, with optional limit for amount of tracks to fetch.

- ### `getUser(id: string, config?: { playlistLimit?: number, artistLimit?: number, episodeLimit?: number })`: [*`Promise<SpotifyUser>`*](https://github.com/tr1ckydev/spotifly/blob/main/src/types/user.ts)

  Fetch the details of the provided user id, with optional limit for amount of tracks to fetch.

- ### `getSection(id: string)`: [*`Promise<SpotifySection>`*](https://github.com/tr1ckydev/spotifly/blob/main/src/types/section.ts)

  Fetch the details of the provided section id.

- ### `getPodcast(id: string)`: [*`Promise<SpotifyPodcast>`*](https://github.com/tr1ckydev/spotifly/blob/main/src/types/podcast.ts)

  Fetch the details of the provided show id.

- ### `getPodcastEpisodes(id: string, limit?: number)`: [*`Promise<SpotifyPodcastEpisodes>`*](https://github.com/tr1ckydev/spotifly/blob/main/src/types/podcastEpisodes.ts)

  Fetch the episodes of the provided show id, with optional limit for amount of episodes to fetch.

- ### `getEpisode(id: string)`: [*`Promise<SpotifyEpisode>`*](https://github.com/tr1ckydev/spotifly/blob/main/src/types/episode.ts)

  Fetch the details of the provided episode id.

- ### `searchAll(terms: string, limit?: number)`: [*`Promise<SpotifySearchAll>`*](https://github.com/tr1ckydev/spotifly/blob/main/src/types/searchAll.ts)

  Search the Spotify library with the terms provided, for all types of content, with optional limit for amount of search results to fetch.

- ### `searchTracks(terms: string, limit?: number)`: [*`Promise<SpotifySearchTracks>`*](https://github.com/tr1ckydev/spotifly/blob/main/src/types/searchTracks.ts)

  Search the Spotify library with the terms provided, for tracks, with optional limit for amount of search results to fetch.

- ### `searchAlbums(terms: string, limit?: number)`: [*`Promise<SpotifySearchAlbums>`*](https://github.com/tr1ckydev/spotifly/blob/main/src/types/searchAlbums.ts)

  Search the Spotify library with the terms provided, for albums, with optional limit for amount of search results to fetch.

- ### `searchPlaylists(terms: string, limit?: number)`: [*`Promise<SpotifySearchPlaylists>`*](https://github.com/tr1ckydev/spotifly/blob/main/src/types/searchPlaylists.ts)

  Search the Spotify library with the terms provided, for playlists, with optional limit for amount of search results to fetch.

- ### `searchArtists(terms: string, limit?: number)`: [*`Promise<SpotifySearchArtists>`*](https://github.com/tr1ckydev/spotifly/blob/main/src/types/searchArtists.ts)

  Search the Spotify library with the terms provided, for artists, with optional limit for amount of search results to fetch.

- ### `searchUsers(terms: string, limit?: number)`: [*`Promise<SpotifySearchUsers>`*](https://github.com/tr1ckydev/spotifly/blob/main/src/types/searchUsers.ts)

  Search the Spotify library with the terms provided, for users, with optional limit for amount of search results to fetch.

- ### `searchPodcasts(terms: string, limit?: number)`: [*`Promise<SpotifySearchPodcasts>`*](https://github.com/tr1ckydev/spotifly/blob/main/src/types/searchPodcasts.ts)

  Search the Spotify library with the terms provided, for podcasts and shows, with optional limit for amount of search results to fetch.

- ### `getTrackLyrics(id: string)`: *`Promise<string[]>`*

  Fetch the lyrics of the provided track id through the [`Musixmatch`](#musixmatch-module) module.

- ### `extractImageColors(...urls: string[])`: [*`Promise<SpotifyExtractedColors>`*](https://github.com/tr1ckydev/spotifly/blob/main/src/types/extractedColors.ts)

  Extract raw, dark and light colors from the provided urls of images using Spotify API.



## `Musixmatch` module

The Musixmatch API module containing functions to search and fetch lyrics. No authentication needed.

- ### `search(terms: string)`: [*`Promise<MusixmatchSearch[]>`*](https://github.com/tr1ckydev/spotifly/blob/main/src/types/musixmatchSearch.ts)

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

This repository uses MIT License. See [LICENSE](https://github.com/tr1ckydev/spotifly/blob/main/LICENSE) for full license text.
