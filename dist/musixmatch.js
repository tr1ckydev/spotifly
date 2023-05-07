export var Musixmatch;
(function (Musixmatch) {
    async function search(terms) {
        const searchResponse = await (await fetch(`https://www.musixmatch.com/search/${encodeURIComponent(terms)}`)).text();
        return [...searchResponse.matchAll(/attributes":(.*),"id":/g)].map(x => JSON.parse(x[1]));
    }
    Musixmatch.search = search;
    async function getLyricsFromUrl(url) {
        const trackResponse = await (await fetch(url)).text();
        return trackResponse.match(/"body":"(.*)","language":/)[1].split("\\n");
    }
    Musixmatch.getLyricsFromUrl = getLyricsFromUrl;
    async function searchLyrics(terms) {
        const searchResponse = await (await fetch(`https://www.musixmatch.com/search/${encodeURIComponent(terms)}`)).text();
        const topResultUrl = JSON.parse(`"${searchResponse.match(/track_share_url":"(.*)","track_edit/)[1]}"`);
        const trackResponse = await (await fetch(topResultUrl)).text();
        return trackResponse.match(/"body":"(.*)","language":/)[1].split("\\n");
    }
    Musixmatch.searchLyrics = searchLyrics;
})(Musixmatch || (Musixmatch = {}));
