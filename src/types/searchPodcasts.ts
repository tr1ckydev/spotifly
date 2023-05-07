export type SpotifySearchPodcasts = {
    data: {
      searchV2: {
        query: string
        episodes: {
          totalCount: number
          items: Array<{
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
                  trailerV2?: {
                    data: {
                      __typename: string
                      uri: string
                      id: string
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
                          trailerV2: {
                            data: {
                              __typename: string
                              uri: string
                            }
                          }
                          showTypes: Array<any>
                        }
                      }
                      type: string
                      segments: {
                        segments: {
                          totalCount: number
                        }
                      }
                      contentInformation: any
                      transcripts: {
                        items: Array<any>
                      }
                    }
                    _uri: string
                  }
                  showTypes: Array<any>
                  id: string
                  saved: boolean
                  description: string
                  htmlDescription: string
                  contentType: string
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
                  musicAndTalk: boolean
                  topics: {
                    items: Array<{
                      __typename: string
                      title: string
                      uri: string
                    }>
                  }
                  nextBestEpisodes: {
                    items: Array<{
                      item: {
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
                              trailerV2?: {
                                data: {
                                  __typename: string
                                  uri: string
                                }
                              }
                              showTypes: Array<any>
                            }
                          }
                          type: string
                          segments: {
                            segments: {
                              totalCount: number
                            }
                          }
                          contentInformation: any
                          transcripts: {
                            items: Array<any>
                          }
                        }
                      }
                      score: number
                    }>
                  }
                  accessInfo: any
                }
              }
              type: string
              segments: {
                segments: {
                  totalCount: number
                }
              }
              contentInformation: any
              transcripts: {
                items: Array<any>
              }
            }
          }>
          pagingInfo: {
            nextOffset: number
            limit: number
          }
        }
      }
    }
    extensions: {
      requestIds: {
        "/searchV2": {
          "search-api": string
        }
      }
    }
  }
  