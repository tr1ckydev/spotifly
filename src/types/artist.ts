export type SpotifyArtist = {
    data: {
        artistUnion: {
            __typename: string
            id: string
            uri: string
            saved: boolean
            sharingInfo: {
                shareUrl: string
                shareId: string
            }
            profile: {
                name: string
                verified: boolean
                pinnedItem: any
                biography: {
                    type: string
                    text: string
                }
                externalLinks: {
                    items: Array<{
                        name: string
                        url: string
                    }>
                }
                playlistsV2: {
                    totalCount: number
                    items: Array<{
                        data: {
                            __typename: string
                            uri: string
                            name: string
                            description: string
                            ownerV2: {
                                data: {
                                    __typename: string
                                    name: string
                                }
                            }
                            images: {
                                items: Array<{
                                    sources: Array<{
                                        url: string
                                        width: any
                                        height: any
                                    }>
                                }>
                            }
                        }
                    }>
                }
            }
            visuals: {
                gallery: {
                    items: Array<{
                        sources: Array<{
                            url: string
                            width: number
                            height: number
                        }>
                    }>
                }
                avatarImage: {
                    sources: Array<{
                        url: string
                        width: number
                        height: number
                    }>
                    extractedColors: {
                        colorRaw: {
                            hex: string
                        }
                    }
                }
                headerImage: {
                    sources: Array<{
                        url: string
                        width: number
                        height: number
                    }>
                    extractedColors: {
                        colorRaw: {
                            hex: string
                        }
                    }
                }
            }
            discography: {
                latest: {
                    id: string
                    uri: string
                    name: string
                    type: string
                    copyright: {
                        items: Array<{
                            type: string
                            text: string
                        }>
                    }
                    date: {
                        year: number
                        month: number
                        day: number
                        precision: string
                    }
                    coverArt: {
                        sources: Array<{
                            url: string
                            width: number
                            height: number
                        }>
                    }
                    tracks: {
                        totalCount: number
                    }
                    label: string
                    playability: {
                        playable: boolean
                        reason: string
                    }
                    sharingInfo: {
                        shareId: string
                        shareUrl: string
                    }
                }
                popularReleasesAlbums: {
                    totalCount: number
                    items: Array<{
                        id: string
                        uri: string
                        name: string
                        type: string
                        copyright: {
                            items: Array<{
                                type: string
                                text: string
                            }>
                        }
                        date: {
                            year: number
                            month: number
                            day: number
                            precision: string
                        }
                        coverArt: {
                            sources: Array<{
                                url: string
                                width: number
                                height: number
                            }>
                        }
                        tracks: {
                            totalCount: number
                        }
                        label: string
                        playability: {
                            playable: boolean
                            reason: string
                        }
                        sharingInfo: {
                            shareId: string
                            shareUrl: string
                        }
                    }>
                }
                singles: {
                    totalCount: number
                    items: Array<{
                        releases: {
                            items: Array<{
                                id: string
                                uri: string
                                name: string
                                type: string
                                copyright: {
                                    items: Array<{
                                        type: string
                                        text: string
                                    }>
                                }
                                date: {
                                    year: number
                                    month: number
                                    day: number
                                    precision: string
                                }
                                coverArt: {
                                    sources: Array<{
                                        url: string
                                        width: number
                                        height: number
                                    }>
                                }
                                tracks: {
                                    totalCount: number
                                }
                                label: string
                                playability: {
                                    playable: boolean
                                    reason: string
                                }
                                sharingInfo: {
                                    shareId: string
                                    shareUrl: string
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
                                id: string
                                uri: string
                                name: string
                                type: string
                                copyright: {
                                    items: Array<{
                                        type: string
                                        text: string
                                    }>
                                }
                                date: {
                                    year: number
                                    month: number
                                    day: number
                                    precision: string
                                }
                                coverArt: {
                                    sources: Array<{
                                        url: string
                                        width: number
                                        height: number
                                    }>
                                }
                                tracks: {
                                    totalCount: number
                                }
                                label: string
                                playability: {
                                    playable: boolean
                                    reason: string
                                }
                                sharingInfo: {
                                    shareId: string
                                    shareUrl: string
                                }
                            }>
                        }
                    }>
                }
                compilations: {
                    totalCount: number
                    items: Array<{
                        releases: {
                            items: Array<{
                                id: string
                                uri: string
                                name: string
                                type: string
                                copyright: {
                                    items: Array<{
                                        type: string
                                        text: string
                                    }>
                                }
                                date: {
                                    year: number
                                    month: number
                                    day: number
                                    precision: string
                                }
                                coverArt: {
                                    sources: Array<{
                                        url: string
                                        width: number
                                        height: number
                                    }>
                                }
                                tracks: {
                                    totalCount: number
                                }
                                label: string
                                playability: {
                                    playable: boolean
                                    reason: string
                                }
                                sharingInfo: {
                                    shareId: string
                                    shareUrl: string
                                }
                            }>
                        }
                    }>
                }
                topTracks: {
                    items: Array<{
                        uid: string
                        track: {
                            id: string
                            uri: string
                            name: string
                            playcount: string
                            discNumber: number
                            duration: {
                                totalMilliseconds: number
                            }
                            playability: {
                                playable: boolean
                                reason: string
                            }
                            contentRating: {
                                label: string
                            }
                            artists: {
                                items: Array<{
                                    uri: string
                                    profile: {
                                        name: string
                                    }
                                }>
                            }
                            albumOfTrack: {
                                uri: string
                                coverArt: {
                                    sources: Array<{
                                        url: string
                                    }>
                                }
                            }
                        }
                    }>
                }
            }
            stats: {
                followers: number
                monthlyListeners: number
                worldRank: number
                topCities: {
                    items: Array<{
                        numberOfListeners: number
                        city: string
                        country: string
                        region: string
                    }>
                }
            }
            relatedContent: {
                appearsOn: {
                    totalCount: number
                    items: Array<{
                        releases: {
                            totalCount: number
                            items: Array<{
                                uri: string
                                id: string
                                name: string
                                type: string
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
                                date: {
                                    year: number
                                }
                                sharingInfo: {
                                    shareId: string
                                    shareUrl: string
                                }
                            }>
                        }
                    }>
                }
                featuringV2: {
                    totalCount: number
                    items: Array<{
                        data: {
                            __typename: string
                            uri: string
                            id: string
                            ownerV2: {
                                data: {
                                    __typename: string
                                    name: string
                                }
                            }
                            name: string
                            description: string
                            images: {
                                totalCount: number
                                items: Array<{
                                    sources: Array<{
                                        url: string
                                        width: any
                                        height: any
                                    }>
                                }>
                            }
                        }
                    }>
                }
                discoveredOnV2: {
                    totalCount: number
                    items: Array<{
                        data: {
                            __typename: string
                            uri: string
                            id: string
                            ownerV2: {
                                data: {
                                    __typename: string
                                    name: string
                                }
                            }
                            name: string
                            description: string
                            images: {
                                totalCount: number
                                items: Array<{
                                    sources: Array<{
                                        url: string
                                        width?: number
                                        height?: number
                                    }>
                                }>
                            }
                        }
                    }>
                }
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
                                    url: string
                                    width: number
                                    height: number
                                }>
                            }
                        }
                    }>
                }
            }
            goods: {
                events: {
                    userLocation: {
                        name: string
                    }
                    concerts: {
                        totalCount: number
                        items: Array<{
                            uri: string
                            id: string
                            title: string
                            category: string
                            festival: boolean
                            nearUser: boolean
                            venue: {
                                name: string
                                location: {
                                    name: string
                                }
                                coordinates: {
                                    latitude: number
                                    longitude: number
                                }
                            }
                            artists: {
                                items: Array<{
                                    uri: string
                                    id: string
                                    profile: {
                                        name: string
                                    }
                                }>
                            }
                            partnerLinks: {
                                items: Array<{
                                    partnerName: string
                                    url: string
                                }>
                            }
                            date: {
                                year: number
                                month: number
                                day: number
                                hour: number
                                minute: number
                                second: number
                                isoString: string
                                precision: string
                            }
                        }>
                        pagingInfo: {
                            limit: number
                        }
                    }
                }
                merch: {
                    items: Array<any>
                }
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
