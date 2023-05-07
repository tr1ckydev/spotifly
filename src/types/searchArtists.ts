export type SpotifySearchArtists = {
    data: {
        searchV2: {
            query: string
            artists: {
                totalCount: number
                items: Array<{
                    data: {
                        __typename: string
                        uri: string
                        profile: {
                            name: string
                            verified: boolean
                        }
                        visuals: {
                            avatarImage?: {
                                sources: Array<{
                                    url: string
                                    width: number
                                    height: number
                                }>
                                extractedColors: {
                                    colorDark: {
                                        hex: string
                                        isFallback: boolean
                                    }
                                }
                            }
                        }
                    }
                }>
                pagingInfo: {
                    nextOffset: number
                    limit: number
                }
            }
        }
    }
    extensions: {
        requestIds: {
            "/searchV2": {
                "search-api": string
            }
        }
        cacheControl: {
            version: number
            hints: Array<any>
        }
    }
}
