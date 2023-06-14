export namespace Parse {

    export function urlToId(url: string) {
        return new URL(url).pathname.split("/")[2];
    }

    export function uriToId(uri: string) {
        return uri.split(":")[2];
    }

    export function urlToUri(url: string) {
        const parts = new URL(url).pathname.split("/");
        return `spotify:${parts[1]}:${parts[2]}`;
    }

    export function uriToUrl(uri: string) {
        const parts = uri.split(":");
        return `https://open.spotify.com/${parts[1]}/${parts[2]}`;
    }

}