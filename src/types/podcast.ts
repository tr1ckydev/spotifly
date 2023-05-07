export type SpotifyPodcast = {
    data: {
        podcastUnionV2: {
            __typename: string
            id: string
            uri: string
            name: string
            saved: boolean
            description: string
            htmlDescription: string
            contentType: string
            coverArt: {
                sources: Array<{
                    url: string
                    width: number
                    height: number
                }>
            }
            contentRating: {
                label: string
            }
            publisher: {
                name: string
            }
            playability: {
                playable: boolean
                reason: string
                unplayabilityReasons: Array<any>
            }
            mediaType: string
            sharingInfo: {
                shareUrl: string
                shareId: string
            }
            trailerV2: any
            episodesV2: {
                __typename: string
                items: Array<{
                    entity: {
                        __typename: string
                        data: {
                            creator: any
                        }
                    }
                }>
            }
            showTypes: Array<string>
            musicAndTalk: boolean
            topics: {
                items: Array<{
                    __typename: string
                    title: string
                    uri: string
                }>
            }
            nextBestEpisodes: {
                items: Array<any>
            }
            accessInfo: any
        }
    }
    extensions: {}
}
