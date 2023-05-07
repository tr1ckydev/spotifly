export namespace Parse {

    export function urlToId(url: string) {
        return new URL(url).pathname.split("/")[2];
    }

    export function uriToId(uri: string) {
        return uri.split(":")[2];
    }

}