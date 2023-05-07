export type SpotifyPodcastEpisodes = {
    errors: Array<{
        message: string
        locations: Array<{
            line: number
            column: number
        }>
        path: Array<string>
        extensions: {
            classification: string
        }
    }>
    data: {
        podcastUnionV2: {
            __typename: string
            id: string
            uri: string
            name: string
            episodesV2: {
                __typename: string
                totalCount: number
                pagingInfo: {
                    nextOffset: number
                }
                items: Array<{
                    uid: string
                    entity: {
                        _uri: string
                        data: {
                            __typename: string
                            id: string
                            uri: string
                            name: string
                            contents: Array<any>
                            htmlDescription: string
                            description: string
                            coverArt: {
                                sources: Array<{
                                    url: string
                                    width: number
                                    height: number
                                }>
                            }
                            creator: any
                            audio: {
                                items: Array<{
                                    url: string
                                    format: string
                                    fileId: string
                                }>
                            }
                            audioPreview: {
                                url: string
                                format: string
                            }
                            duration: {
                                totalMilliseconds: number
                            }
                            contentRating: {
                                label: string
                            }
                            releaseDate: {
                                isoString: string
                            }
                            playedState: {
                                playPositionMilliseconds: number
                                state: string
                            }
                            mediaTypes: Array<string>
                            restrictions: {
                                paywallContent: boolean
                            }
                            playability: {
                                playable: boolean
                                reason: string
                                unplayabilityReasons: Array<any>
                            }
                            sharingInfo: {
                                shareUrl: string
                                shareId: string
                            }
                            podcastV2: {
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
                                    }
                                    trailerV2: any
                                    showTypes: Array<string>
                                }
                            }
                            type: string
                            segments: any
                            contentInformation?: {
                                buttonTarget: string
                                buttonText: string
                                cardBodyText: string
                                cardHeaderText: string
                            }
                            transcripts: {
                                items: Array<any>
                            }
                        }
                    }
                }>
            }
        }
    }
    extensions: {}
}
