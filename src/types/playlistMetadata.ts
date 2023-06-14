export type SpotifyPlaylistMetadata = {
    data: {
        playlistV2: {
            __typename: string
            uri: string
            name: string
            description: string
            ownerV2: {
                data: {
                    __typename: string
                    uri: string
                    username: string
                    name: string
                    avatar: {
                        sources: Array<{
                            url: string
                            width: number
                            height: number
                        }>
                    }
                }
            }
            images: {
                items: Array<{
                    extractedColors: {
                        colorRaw: {
                            hex: string
                            isFallback: boolean
                        }
                    }
                    sources: Array<{
                        url: string
                        width: any
                        height: any
                    }>
                }>
            }
            collaborative: boolean
            followers: number
            format: string
            attributes: Array<any>
            sharingInfo: {
                shareUrl: string
            }
            content: {
                __typename: string
                totalCount: number
                pagingInfo: {
                    limit: number
                }
                items: Array<{
                    itemV2: {
                        __typename: string
                        data: {
                            __typename: string
                            uri: string
                            trackDuration: {
                                totalMilliseconds: number
                            }
                        }
                    }
                }>
            }
        }
    }
    extensions: {
        cacheControl: {
            version: number
            hints: Array<any>
        }
    }
}
