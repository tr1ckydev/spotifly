export type MusixmatchSearch = {
    track_id: number
    track_mbid: string
    track_isrc: string
    commontrack_isrcs: Array<Array<string>>
    track_spotify_id: string
    commontrack_spotify_ids: Array<string>
    track_soundcloud_id: number
    track_xboxmusic_id: string
    track_name: string
    track_name_translation_list: Array<any>
    track_rating: number
    track_length: number
    commontrack_id: number
    instrumental: number
    explicit: number
    has_lyrics: number
    has_lyrics_crowd: number
    has_subtitles: number
    has_richsync: number
    has_track_structure: number
    num_favourite: number
    lyrics_id: number
    subtitle_id: number
    album_id: number
    album_name: string
    artist_id: number
    artist_mbid: string
    artist_name: string
    album_coverart_100x100: string
    album_coverart_350x350: string
    album_coverart_500x500: string
    album_coverart_800x800: string
    track_share_url: string
    track_edit_url: string
    commontrack_vanity_id: string
    restricted: number
    first_release_date: string
    updated_time: string
    primary_genres: {
        music_genre_list: Array<{
            music_genre: {
                music_genre_id: number
                music_genre_parent_id: number
                music_genre_name: string
                music_genre_name_extended: string
                music_genre_vanity: string
            }
        }>
    }
    secondary_genres: {
        music_genre_list: Array<{
            music_genre: {
                music_genre_id: number
                music_genre_parent_id: number
                music_genre_name: string
                music_genre_name_extended: string
                music_genre_vanity: string
            }
        }>
    }
}
