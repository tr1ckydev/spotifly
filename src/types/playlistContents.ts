export type SpotifyPlaylistContents = {
    data: {
        playlistV2: {
            __typename: string
            content: {
                __typename: string
                totalCount: number
                pagingInfo: {
                    offset: number
                    limit: number
                }
                items: Array<{
                    uid: string
                    addedAt: {
                        isoString: string
                    }
                    addedBy: {
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
                    attributes: Array<any>
                    itemV2: {
                        __typename: string
                        data: {
                            __typename: string
                            uri: string
                            name: string
                            trackDuration: {
                                totalMilliseconds: number
                            }
                            playcount: string
                            albumOfTrack: {
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
                                }
                            }
                            artists: {
                                items: Array<{
                                    uri: string
                                    profile: {
                                        name: string
                                    }
                                }>
                            }
                            discNumber: number
                            trackNumber: number
                            playability: {
                                playable: boolean
                                reason: string
                            }
                            contentRating: {
                                label: string
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
            hints: Array<{
                path: [string, number, string]
                maxAge: number
                scope: string
            }>
        }
    }
}
