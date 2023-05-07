export type SpotifySearchAll = {
	data: {
		searchV2: {
			albums: {
				totalCount: number
				items: Array<{
					data: {
						__typename: string
						uri: string
						name: string
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
							extractedColors: {
								colorDark: {
									hex: string
									isFallback: boolean
								}
							}
						}
						date: {
							year: number
						}
					}
				}>
			}
			artists: {
				totalCount: number
				items: Array<{
					data: {
						__typename: string
						uri: string
						profile: {
							name: string
							verified: boolean
						}
						visuals: {
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
					}
				}>
			}
			episodes: {
				totalCount: number
				items: Array<{
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
						duration: {
							totalMilliseconds: number
						}
						releaseDate: {
							isoString: string
							precision: string
						}
						playedState: {
							playPositionMilliseconds: number
							state: string
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
								mediaType: string
								publisher: {
									name: string
								}
							}
						}
						description: string
						contentRating: {
							label: string
						}
					}
				}>
			}
			genres: {
				totalCount: number
				items: Array<any>
			}
			playlists: {
				totalCount: number
				items: Array<{
					data: {
						__typename: string
						uri: string
						name: string
						description: string
						images: {
							items: Array<{
								sources: Array<{
									url: string
									width?: number
									height?: number
								}>
								extractedColors: {
									colorDark: {
										hex: string
										isFallback: boolean
									}
								}
							}>
						}
						ownerV2: {
							data: {
								__typename: string
								name: string
								uri: string
								username: string
								avatar?: {
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
			}
			podcasts: {
				totalCount: number
				items: Array<{
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
						topics: {
							items: Array<{
								__typename: string
								title: string
								uri: string
							}>
						}
					}
				}>
			}
			audiobooks: {
				totalCount: number
				items: Array<any>
			}
			tracksV2: {
				totalCount: number
				items: Array<{
					matchedFields: Array<string>
					item: {
						data: {
							__typename: string
							uri: string
							id: string
							name: string
							albumOfTrack: {
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
								id: string
							}
							artists: {
								items: Array<{
									uri: string
									profile: {
										name: string
									}
								}>
							}
							contentRating: {
								label: string
							}
							duration: {
								totalMilliseconds: number
							}
							playability: {
								playable: boolean
							}
						}
					}
				}>
			}
			users: {
				totalCount: number
				items: Array<{
					data: {
						__typename: string
						uri: string
						id: string
						displayName: string
						username: string
						avatar?: {
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
				}>
			}
			topResults: {
				itemsV2: Array<{
					matchedFields: Array<string>
					item: {
						data: {
							__typename: string
							uri: string
							id?: string
							name?: string
							albumOfTrack?: {
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
								id: string
							}
							artists?: {
								items: Array<{
									uri: string
									profile: {
										name: string
									}
								}>
							}
							contentRating?: {
								label: string
							}
							duration?: {
								totalMilliseconds: number
							}
							playability?: {
								playable: boolean
							}
							profile?: {
								name: string
								verified: boolean
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
							date?: {
								year: number
							}
						}
					}
				}>
				featured: Array<{
					data: {
						__typename: string
						uri: string
						name: string
						description: string
						images: {
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
						ownerV2: {
							data: {
								__typename: string
								name: string
								uri: string
								username: string
								avatar: {
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
			}
			chipOrder: {
				items: Array<{
					typeName: string
				}>
			}
		}
	}
	extensions: {
		requestIds: {
			"/searchV2": {
				"search-api": string
			}
			"/searchV2/topResults": {
				"search-api": string
			}
		}
		cacheControl: {
			version: number
			hints: Array<any>
		}
	}
}
