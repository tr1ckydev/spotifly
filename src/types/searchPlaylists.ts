export type SpotifySearchPlaylists = {
    data: {
        searchV2: {
            query: string
            playlists: {
                totalCount: number
                items: Array<{
                    data: {
                        __typename: string
                        uri: string
                        name: string
                        description: string
                        images: {
                            items: Array<{
                                sources: Array<{
                                    url: string
                                    width?: number
                                    height?: number
                                }>
                                extractedColors: {
                                    colorDark: {
                                        hex: string
                                        isFallback: boolean
                                    }
                                }
                            }>
                        }
                        ownerV2: {
                            data: {
                                __typename: string
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
