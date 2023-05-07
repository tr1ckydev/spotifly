export type SpotifyHome = {
    data: {
        home: {
            __typename: string
            greeting: {
                text: string
            }
            sectionContainer: {
                uri: string
                sections: {
                    items: Array<{
                        uri: string
                        data: {
                            __typename: string
                            title?: {
                                text: string
                            }
                        }
                        sectionItems: {
                            items: Array<{
                                uri: string
                                content: {
                                    __typename: string
                                    data?: {
                                        __typename: string
                                        uri: string
                                        name?: string
                                        images?: {
                                            items: Array<{
                                                sources: Array<{
                                                    url: string
                                                    width: any
                                                    height: any
                                                }>
                                                extractedColors: {
                                                    colorDark: {
                                                        hex: string
                                                        isFallback: boolean
                                                    }
                                                }
                                            }>
                                        }
                                        description?: string
                                        ownerV2?: {
                                            data: {
                                                __typename: string
                                                name: string
                                            }
                                        }
                                        coverArt?: {
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
                                        artists?: {
                                            items: Array<{
                                                uri: string
                                                profile: {
                                                    name: string
                                                }
                                            }>
                                        }
                                        profile?: {
                                            name: string
                                        }
                                        visuals?: {
                                            avatarImage: {
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
                                        duration?: {
                                            totalMilliseconds: number
                                        }
                                        releaseDate?: {
                                            isoString: string
                                        }
                                        playedState?: {
                                            playPositionMilliseconds: number
                                            state: string
                                        }
                                        podcastV2?: {
                                            data: {
                                                __typename: string
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
                                                publisher: {
                                                    name: string
                                                }
                                                mediaType: string
                                            }
                                        }
                                        contentRating?: {
                                            label: string
                                        }
                                    }
                                    uri?: string
                                }
                                data?: {
                                    __typename: string
                                }
                            }>
                            totalCount: number
                        }
                    }>
                    totalCount: number
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
