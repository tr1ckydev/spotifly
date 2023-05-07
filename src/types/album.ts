export type SpotifyAlbum = {
    data: {
        albumUnion: {
            __typename: string
            uri: string
            name: string
            artists: {
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
                                url: string
                                width: number
                                height: number
                            }>
                        }
                    }
                    sharingInfo: {
                        shareUrl: string
                    }
                }>
            }
            coverArt: {
                extractedColors: {
                    colorRaw: {
                        hex: string
                    }
                    colorLight: {
                        hex: string
                    }
                    colorDark: {
                        hex: string
                    }
                }
                sources: Array<{
                    url: string
                    width: number
                    height: number
                }>
            }
            discs: {
                totalCount: number
                items: Array<{
                    number: number
                    tracks: {
                        totalCount: number
                    }
                }>
            }
            releases: {
                totalCount: number
                items: Array<{
                    uri: string
                    name: string
                }>
            }
            type: string
            date: {
                isoString: string
                precision: string
            }
            playability: {
                playable: boolean
                reason: string
            }
            label: string
            copyright: {
                totalCount: number
                items: Array<{
                    type: string
                    text: string
                }>
            }
            courtesyLine: string
            saved: boolean
            sharingInfo: {
                shareUrl: string
                shareId: string
            }
            tracks: {
                totalCount: number
                items: Array<{
                    uid: string
                    track: {
                        saved: boolean
                        uri: string
                        name: string
                        playcount: string
                        discNumber: number
                        trackNumber: number
                        contentRating: {
                            label: string
                        }
                        relinkingInformation: any
                        duration: {
                            totalMilliseconds: number
                        }
                        playability: {
                            playable: boolean
                        }
                        artists: {
                            items: Array<{
                                uri: string
                                profile: {
                                    name: string
                                }
                            }>
                        }
                    }
                }>
            }
            moreAlbumsByArtist: {
                items: Array<{
                    discography: {
                        popularReleasesAlbums: {
                            items: Array<{
                                id: string
                                uri: string
                                name: string
                                date: {
                                    year: number
                                }
                                coverArt: {
                                    sources: Array<{
                                        url: string
                                        width: number
                                        height: number
                                    }>
                                }
                                playability: {
                                    playable: boolean
                                    reason: string
                                }
                                sharingInfo: {
                                    shareId: string
                                    shareUrl: string
                                }
                                type: string
                            }>
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
