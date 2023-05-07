export type SpotifySearchUsers = {
    data: {
        searchV2: {
            query: string
            users: {
                totalCount: number
                items: Array<{
                    data: {
                        __typename: string
                        uri: string
                        id: string
                        displayName: string
                        username: string
                        avatar: {
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
                }>
                pagingInfo: {
                    nextOffset: any
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
            hints: Array<{
                path: [string, number, string]
                maxAge: number
                scope: string
            }>
        }
    }
}
