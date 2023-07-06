export type SpotifyLikedSongs = {
    data: {
        me: {
            library: {
                tracks: {
                    __typename: string;
                    pagingInfo: {
                        offset: number;
                        limit: number;
                    };
                    items: Array<{
                        __typename: string;
                        addedAt: {
                            isoString: string;
                        };
                        track: {
                            _uri: string;
                            data: {
                                __typename: string;
                                name: string;
                                duration: {
                                    totalMilliseconds: number;
                                };
                                albumOfTrack: {
                                    uri: string;
                                    name: string;
                                    artists: {
                                        items: Array<{
                                            uri: string;
                                            profile: {
                                                name: string;
                                            };
                                        }>;
                                    };
                                    coverArt: {
                                        sources: Array<{
                                            url: string;
                                            width: number;
                                            height: number;
                                        }>;
                                    };
                                };
                                artists: {
                                    items: Array<{
                                        uri: string;
                                        profile: {
                                            name: string;
                                        };
                                    }>;
                                };
                                discNumber: number;
                                trackNumber: number;
                                contentRating: {
                                    label: string;
                                };
                                playability: {
                                    playable: boolean;
                                };
                            };
                        };
                    }>;
                    totalCount: number;
                };
            };
        };
    };
    extensions: {};
};

export type SpotifyLikedSongsAdd = {
    data: {
        addLibraryItems: {
            __typename: string;
        };
    };
    extensions: {};
};

export type SpotifyLikedSongsRemove = {
    data: {
        removeLibraryItems: {
            __typename: string;
        };
    };
    extensions: {};
}
