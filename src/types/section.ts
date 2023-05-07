export type SpotifySection = {
    data: {
      homeSections: {
        __typename: string
        sections: Array<{
          __typename: string
          uri: string
          data: {
            __typename: string
            title: {
              text: string
            }
          }
          sectionItems: {
            items: Array<{
              uri: string
              content: {
                __typename: string
                data: {
                  __typename: string
                  uri: string
                  name: string
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
                  description: string
                  ownerV2: {
                    data: {
                      __typename: string
                      name: string
                    }
                  }
                }
              }
              data: any
            }>
            totalCount: number
          }
        }>
      }
    }
    extensions: {
      cacheControl: {
        version: number
        hints: Array<any>
      }
    }
  }
  