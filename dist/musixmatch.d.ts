import { MusixmatchSearch } from "./types/musixmatchSearch";
export declare namespace Musixmatch {
    function search(terms: string): Promise<MusixmatchSearch[]>;
    function getLyricsFromUrl(url: string): Promise<string[]>;
    function searchLyrics(terms: string): Promise<string[]>;
}
