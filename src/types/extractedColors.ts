export type SpotifyExtractedColors = {
    data: {
        extractedColors: Array<{
            __typename: string
            colorRaw: {
                hex: string
                isFallback: boolean
            }
            colorDark: {
                hex: string
                isFallback: boolean
            }
            colorLight: {
                hex: string
                isFallback: boolean
            }
        }>
    }
    extensions: {
        cacheControl: {
            version: number
            hints: Array<any>
        }
    }
}
