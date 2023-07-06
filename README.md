# ![](https://open.spotifycdn.com/cdn/images/favicon32.b64ecc03.png) `spotifly`

## Spotify with wings !

Spotify library in typescript without using the [Spotify Web API](https://developer.spotify.com/documentation/web-api).

- No authentication required.
- Super fast like the Web API.
- Lightweight with zero dependencies.
- Strongly typed API functions.
- Personalized fetching and automation using cookies.
- Automatic internal token refreshing.

...along with a [Musixmatch API module](#musixmatch-module). Works without any authentication too.



## 📦 Get Started

- ### Requirement

  `node.js (>=17.5.0)`, `bun` or `deno` runtime.

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

Functions marked with an asterisk (*) require your spotify cookies to work. [How to get your Spotify cookies ?](#-how-to-get-your-spotify-cookies-)

- [`Spotifly` module](#spotifly-module)
  - [`getHomepage`](#gethomepage-promisespotifyhome)
  - [`getTrack`](#gettrackid-string-promisespotifytrack)
  - [`getTrackCredits`](#gettrackcreditsid-string-promisespotifytrackcredits)
  - [`getRelatedTrackArtists`](#getrelatedtrackartistsid-string-promisespotifyrelatedtrackartists)
  - [`getArtist`](#getartistid-string-promisespotifyartist)
  - [`getAlbum`](#getalbumid-string-limit-number-promisespotifyalbum)
  - [`getPlaylist`](#getplaylistid-string-limit-number-promisespotifyplaylist)
  - [`getPlaylistMetadata`](#getplaylistmetadataid-string-limit-number-promisespotifyplaylistmetadata)
  - [`getPlaylistContents`](#getplaylistcontentsid-string-limit-number-promisespotifyplaylistcontents)
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
  - *[`getMyProfile`](#getmyprofile-promisespotifymyprofile)
  - *[`getMyLibrary`](#getmylibraryconfig-promisespotifymylibrary)
  - *[`getMyProductState`](#getmyproductstate-promisespotifyproductstate)
  - *[`getMyLikedSongs`](#getmylikedsongs-promisespotifylikedsongs)
  - *[`addToLikedSongs`](#addtolikedsongstrackuris-string-promisespotifylikedsongsadd)
  - *[`removeFromLikedSongs`](#removefromlikedsongstrackuris-string-promisespotifylikedsongsremove)
  - *[`getTrackColorLyrics`](#gettrackcolorlyricsid-string-imgurl-string-promisespotifycolorlyrics)
- *[`SpotiflyPlaylist` module](#spotiflyplaylist-module)
  - [`id`](#id-string)
  - [`create`](#createname-string)
  - [`rename`](#renamenewname-string)
  - [`changeDescription`](#changedescriptionnewdescription-string)
  - [`fetchMetadata`](#fetchmetadatalimit-number)
  - [`fetchContents`](#fetchcontentslimit-number)
  - [`add`](#addtrackuris-string)
  - [`remove`](#removetrackuris-string)
  - [`cloneFrom`](#clonefromid-string-config--name-string-description-string-limit-number-)
  - [`delete`](#delete)
- [`Musixmatch` module](#musixmatch-module)
  - [`search`](#searchterms-string-musixmatchsearch)
  - [`getLyricsFromUrl`](#getlyricsfromurlurl-string-string)
  - [`searchLyrics`](#searchlyricsterms-string-string)
- [`Parse` module](#parse-module)
  - [`urlToId`](#urltoidurl-string-string)
  - [`uriToId`](#uritoiduri-string-string)
  - [`urlToUri`](#urltouriurl-string-string)
  - [`uriToUrl`](#uritourluri-string-string)
- [How to get your Spotify cookies ?](#-how-to-get-your-spotify-cookies-)



## `Spotifly` module

### `new Spotifly(cookie?: string)`

The main module containing all the Spotify API functions.

- ### `getHomepage()`: [*`Promise<SpotifyHome>`*](https://github.com/tr1ckydev/spotifly/blob/main/src/types/home.ts)

  Fetch the Spotify homepage data.

- ### `getTrack(id: string)`: [*`Promise<SpotifyTrack>`*](https://github.com/tr1ckydev/spotifly/blob/main/src/types/track.ts)

  Fetch the details of the provided track id.

- ### `getTrackCredits(id: string)`: [*`Promise<SpotifyTrackCredits>`*](https://github.com/tr1ckydev/spotifly/blob/main/src/types/trackCredits.ts)

  Fetch the credits of the provided track id.

- ### `getRelatedTrackArtists(id: string)`: [*`Promise<SpotifyRelatedTrackArtists>`*](https://github.com/tr1ckydev/spotifly/blob/main/src/types/relatedTrackArtists.ts)

  Fetch the related artists of the artist of the provided track id.

- ### `getArtist(id: string)`: [*`Promise<SpotifyArtist>`*](https://github.com/tr1ckydev/spotifly/blob/main/src/types/artist.ts)

  Fetch the details of the provided artist id.

- ### `getAlbum(id: string, limit?: number)`: [*`Promise<SpotifyAlbum>`*](https://github.com/tr1ckydev/spotifly/blob/main/src/types/album.ts)

  Fetch the details of the provided album id, with optional limit for amount of tracks to fetch.

- ### `getPlaylist(id: string, limit?: number)`: [*`Promise<SpotifyPlaylist>`*](https://github.com/tr1ckydev/spotifly/blob/main/src/types/playlist.ts)

  Fetch all the details of the provided playlist id, with optional limit for amount of tracks to fetch.

- ### `getPlaylistMetadata(id: string, limit?: number)`: [*`Promise<SpotifyPlaylistMetadata>`*](https://github.com/tr1ckydev/spotifly/blob/main/src/types/playlistMetadata.ts)

  Fetch the metadata only of the provided playlist id, with optional limit for amount of tracks to fetch.

- ### `getPlaylistContents(id: string, limit?: number)`: [*`Promise<SpotifyPlaylistContents>`*](https://github.com/tr1ckydev/spotifly/blob/main/src/types/playlistContents.ts)

  Fetch the contents of the provided playlist id, with optional limit for amount of tracks to fetch.

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

  If you want to fetch lyrics directly from Spotify, see [`getTrackColorLyrics`](#gettrackcolorlyricsid-string-imgurl-string-promisespotifycolorlyrics).

- ### `extractImageColors(...urls: string[])`: [*`Promise<SpotifyExtractedColors>`*](https://github.com/tr1ckydev/spotifly/blob/main/src/types/extractedColors.ts)

  Extract raw, dark and light colors from the provided urls of images using Spotify API.

> The following functions require cookies to work. [How to get your Spotify cookies ?](#-how-to-get-your-spotify-cookies-)

- ### `getMyProfile()`: [*`Promise<SpotifyMyProfile>`*](https://github.com/tr1ckydev/spotifly/blob/main/src/types/myProfile.ts)

  Fetch the details of your Spotify profile.

- ### `getMyLibrary(config?)`: [*`Promise<SpotifyMyLibrary>`*](https://github.com/tr1ckydev/spotifly/blob/main/src/types/myLibrary.ts)

  Fetch your Spotify library.

  - config.filter?: `[] | ["Playlists"] | ["Playlists", "By you"] | ["Artists"]`
  - config.order?: `"Recents" | "Recently Added" | "Alphabetical" | "Creator" | "Custom Order"`
  - config.textFilter?: `string`
  - config.limit?: `number`

- ### `getMyProductState()`: [*`Promise<SpotifyProductState>`*](https://github.com/tr1ckydev/spotifly/blob/main/src/types/productState.ts)

  Fetch the details of your Spotify product state like premium plan, etc.

- ### `getMyLikedSongs()`: [*`Promise<SpotifyLikedSongs>`*](https://github.com/tr1ckydev/spotifly/blob/main/src/types/likedSongs.ts)

  Fetch the songs you have liked from your Spotify library.

- ### `addToLikedSongs(...trackUris: string[])`: [*`Promise<SpotifyLikedSongsAdd>`*](https://github.com/tr1ckydev/spotifly/blob/main/src/types/likedSongs.ts)

  Add the tracks to your liked songs library.

- ### `removeFromLikedSongs(...trackUris: string[])`: [*`Promise<SpotifyLikedSongsRemove>`*](https://github.com/tr1ckydev/spotifly/blob/main/src/types/likedSongs.ts)

  Remove the tracks from your liked songs library.

- ### `getTrackColorLyrics(id: string, imgUrl?: string)`: [*`Promise<SpotifyColorLyrics>`*](https://github.com/tr1ckydev/spotifly/blob/main/src/types/likedSongs.ts)

  Fetch the track lyrics directly from Spotify's internal Musixmatch API with an optional image url to fetch the colors of that image.



## `SpotiflyPlaylist` module

### `new SpotiflyPlaylist(cookie: string)`

The module containing all the functions to interact with playlists in your Spotify library using the cookies provided. [How to get your Spotify cookies ?](#-how-to-get-your-spotify-cookies-)

- ### `id`: `string`

  Property to get or set the playlist id with whom the following functions will be interacting.

- ### `create(name: string)`

  Create a new empty playlist with the provided name in your Spotify library and sets the `id` with the newly created one.

- ### `rename(newName: string)`

  Change the name of the playlist with the new name provided.

- ### `changeDescription(newDescription: string)`

  Change the description of the playlist with the new description provided.

- ### `fetchMetadata(limit?: number)`

  Fetch the metadata of the playlist.

- ### `fetchContents(limit?: number)`

  Fetch the contents of the playlist.

- ### `add(...trackUris: string[])`

  Add tracks to the playlist from the provided track uris.

- ### `remove(...trackUris: string[])`

  Remove tracks from the playlist from the provided track uris.

- ### `cloneFrom(id: string, config?: { name?: string, description?: string, limit?: number; })`

  Create a new playlist in your Spotify library by cloning from another playlist with optional config to change the data of the created playlist and sets the `id` with the newly created one.

- ### `delete()`

  Delete the playlist from your Spotify library.



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

  Extract the id from a Spotify uri (i.e. `spotify:track:abcdefghijk`).
  
- ### `urlToUri(url: string)`: `string`

  Convert an `open.spotify.com` url to a Spotify uri (i.e. `spotify:track:abcdefghijk`).

- ### `uriToUrl(uri: string)`: `string`

  Convert a Spotify uri (i.e. `spotify:track:abcdefghijk`) to an `open.spotify.com` url.



## 🍪 How to get your Spotify cookies ?

- Login to your Spotify account in your browser.
- Open *Developer Tools* of your browser and switch to *Network* tab.
- Go to https://open.spotify.com/.
- Find the request with the name `open.spotify.com` and open it.
- From the *Headers* tab, scroll to *Request Headers* section.
- Copy the contents of the `Cookie` header value.

The copied value is your Spotify cookies.



## 📜 License

This repository uses MIT License. See [LICENSE](https://github.com/tr1ckydev/spotifly/blob/main/LICENSE) for full license text.
