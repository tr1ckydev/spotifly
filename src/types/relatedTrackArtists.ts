export type SpotifyRelatedTrackArtists = {
    data: {
        trackUnion: {
            __typename: string
            firstArtist: {
                items: Array<{
                    artist: {
                        relatedContent: {
                            relatedArtists: {
                                totalCount: number
                                items: Array<{
                                    id: string
                                    uri: string
                                    profile: {
                                        name: string
                                    }
                                    visuals: {
                                        avatarImage: {
                                            sources: Array<{
                                                width: number
                                                height: number
                                                url: string
                                            }>
                                        }
                                    }
                                }>
                            }
                        }
                    }
                }>
            }
            otherArtists: {
                items: Array<{
                    artist: {
                        id: string
                        uri: string
                        visuals: {
                            avatarImage: {
                                sources: Array<{
                                    width: number
                                    height: number
                                    url: string
                                }>
                            }
                        }
                        profile: {
                            name: string
                        }
                        discography: {
                            popularReleasesAlbums: {
                                totalCount: number
                                items: Array<{
                                    name: string
                                    type: string
                                    uri: string
                                    playability: {
                                        playable: boolean
                                    }
                                    date: {
                                        isoString: string
                                        precision: string
                                        year: number
                                    }
                                    tracks: {
                                        totalCount: number
                                        items: Array<{
                                            track: {
                                                uri: string
                                                trackNumber: number
                                            }
                                        }>
                                    }
                                    coverArt: {
                                        extractedColors: {
                                            colorRaw: {
                                                hex: string
                                            }
                                        }
                                        sources: Array<{
                                            url: string
                                            width: number
                                            height: number
                                        }>
                                    }
                                }>
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
                path: Array<string>
                maxAge: number
                scope: string
            }>
        }
    }
}
