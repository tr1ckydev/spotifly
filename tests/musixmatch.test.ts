import { expect, test } from "bun:test";
import { Musixmatch } from "../src";

test("search", async () => {
    const result = await Musixmatch.search("starboy weeknd");
    expect(result[0].track_name).toBe("Starboy");
});

test("searchLyrics", async () => {
    const result = await Musixmatch.searchLyrics("starboy weeknd");
    expect(result[0]).toBe("I′m tryna put you in the worst mood, ah");
});

test("getLyricsFromUrl", async () => {
    const result = await Musixmatch.getLyricsFromUrl("https://www.musixmatch.com/lyrics/The-Weeknd-feat-Daft-Punk/starboy-1");
    expect(result[0]).toBe("I′m tryna put you in the worst mood, ah");
});