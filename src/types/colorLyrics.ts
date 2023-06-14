export type SpotifyColorLyrics = {
    lyrics: {
        syncType: string
        lines: Array<{
            startTimeMs: string
            words: string
            syllables: Array<any>
            endTimeMs: string
        }>
        provider: string
        providerLyricsId: string
        providerDisplayName: string
        syncLyricsUri: string
        isDenseTypeface: boolean
        alternatives: Array<any>
        language: string
        isRtlLanguage: boolean
        fullscreenAction: string
    }
    colors: {
        background: number
        text: number
        highlightText: number
    }
    hasVocalRemoval: boolean
}
