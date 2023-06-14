export type SpotifyMyLibrary = {
    data: {
        me: {
            libraryV2: {
                page: {
                    __typename: string
                    availableFilters: Array<{
                        id: string
                        name: string
                    }>
                    selectedFilters: Array<any>
                    availableSortOrders: Array<{
                        id: string
                        name: string
                    }>
                    selectedSortOrder: {
                        id: string
                        name: string
                    }
                    breadcrumbs: Array<any>
                    items: Array<{
                        addedAt: {
                            isoString: string
                        }
                        pinnable: boolean
                        pinned: boolean
                        depth: number
                        playedAt?: {
                            isoString: string
                        }
                        item: {
                            __typename: string
                            _uri: string
                            data: {
                                __typename: string
                                uri: string
                                name?: string
                                count?: number
                                image?: {
                                    extractedColors: {
                                        colorDark: {
                                            hex: string
                                            isFallback: boolean
                                        }
                                    }
                                    sources: Array<{
                                        url: string
                                        width: number
                                        height: number
                                    }>
                                }
                                collaborative?: boolean
                                ownerV2?: {
                                    data: {
                                        __typename: string
                                        id: string
                                        name: string
                                        uri: string
                                        avatar: {
                                            sources: Array<{
                                                url: string
                                                height: number
                                                width: number
                                            }>
                                        }
                                        username: string
                                    }
                                }
                                images?: {
                                    items: Array<{
                                        extractedColors: {
                                            colorDark: {
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
                                profile?: {
                                    name: string
                                }
                                visuals?: {
                                    avatarImage: {
                                        extractedColors: {
                                            colorDark: {
                                                hex: string
                                                isFallback: boolean
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
                    }>
                    pagingInfo: {
                        offset: number
                        limit: number
                    }
                    totalCount: number
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
