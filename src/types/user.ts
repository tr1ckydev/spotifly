export type SpotifyUser = {
    uri: string
    name: string
    image_url: string
    followers_count: number
    following_count: number
    is_following: boolean
    public_playlists: Array<{
        uri: string
        name: string
        image_url: string
        followers_count?: number
        owner_name?: string
        owner_uri?: string
        is_following?: boolean
    }>
    total_public_playlists_count: number
    has_spotify_name: boolean
    has_spotify_image: boolean
    color: number
    allow_follows: boolean
    show_follows: boolean
}
