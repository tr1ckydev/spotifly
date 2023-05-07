export type SpotifySearchTracks = {
    data: {
        searchV2: {
            query: string
            tracksV2: {
                totalCount: number
                items: Array<{
                    matchedFields: Array<string>
                    item: {
                        data: {
                            __typename: string
                            uri: string
                            id: string
                            name: string
                            albumOfTrack: {
                                uri: string
                                name: string
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
                                id: string
                            }
                            artists: {
                                items: Array<{
                                    uri: string
                                    profile: {
                                        name: string
                                    }
                                }>
                            }
                            contentRating: {
                                label: string
                            }
                            duration: {
                                totalMilliseconds: number
                            }
                            playability: {
                                playable: boolean
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
