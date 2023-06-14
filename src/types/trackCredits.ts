export type SpotifyTrackCredits = {
    trackUri: string
    trackTitle: string
    roleCredits: Array<{
        roleTitle: string
        artists: Array<{
            uri: string
            name: string
            imageUri: string
            subroles: Array<string>
            weight: number
        }>
    }>
    extendedCredits: Array<any>
    sourceNames: Array<string>
}
