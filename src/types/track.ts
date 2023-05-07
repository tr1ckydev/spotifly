export type SpotifyTrack = {
    data: {
        trackUnion: {
            __typename: string
            id: string
            uri: string
            name: string
            contentRating: {
                label: string
            }
            duration: {
                totalMilliseconds: number
            }
            playability: {
                playable: boolean
                reason: string
            }
            trackNumber: number
            playcount: string
            saved: boolean
            sharingInfo: {
                shareUrl: string
                shareId: string
            }
            artistsWithRoles: {
                totalCount: number
                items: Array<{
                    role: string
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
                            singles: {
                                totalCount: number
                                items: Array<{
                                    releases: {
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
                                }>
                            }
                            albums: {
                                totalCount: number
                                items: Array<{
                                    releases: {
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
                                }>
                            }
                            popularReleasesAlbums: {
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
                            topTracks: {
                                items: Array<{
                                    track: {
                                        artists: {
                                            items: Array<{
                                                uri: string
                                                profile: {
                                                    name: string
                                                }
                                            }>
                                        }
                                        albumOfTrack: {
                                            name: string
                                            uri: string
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
                                        }
                                        playability: {
                                            playable: boolean
                                        }
                                        playcount: string
                                        previews: {
                                            audioPreviews: {
                                                items: Array<{
                                                    url: string
                                                }>
                                            }
                                        }
                                        duration: {
                                            totalMilliseconds: number
                                        }
                                        name: string
                                        uri: string
                                        id: string
                                    }
                                }>
                            }
                        }
                    }
                }>
            }
            albumOfTrack: {
                id: string
                copyright: {
                    totalCount: number
                    items: Array<{
                        text: string
                        type: string
                    }>
                }
                courtesyLine: string
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
