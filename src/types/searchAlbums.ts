export type SpotifySearchAlbums = {
    data: {
        searchV2: {
            query: string
            albums: {
                totalCount: number
                items: Array<{
                    data: {
                        __typename: string
                        uri: string
                        name: string
                        artists: {
                            items: Array<{
                                uri: string
                                profile: {
                                    name: string
                                }
                            }>
                        }
                        coverArt: {
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
                        date: {
                            year: number
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
