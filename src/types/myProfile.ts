export type SpotifyMyProfile = {
    birthdate: string
    country: string
    display_name: string
    email: string
    explicit_content: {
        filter_enabled: boolean
        filter_locked: boolean
    }
    external_urls: {
        spotify: string
    }
    followers: {
        href: string
        total: number
    }
    href: string
    id: string
    images: Array<{
        height: number
        url: string
        width: number
    }>
    policies: {
        opt_in_trial_premium_only_market: boolean
    }
    product: string
    type: string
    uri: string
}
