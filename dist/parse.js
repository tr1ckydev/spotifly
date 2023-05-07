export var Parse;
(function (Parse) {
    function urlToId(url) {
        return new URL(url).pathname.split("/")[2];
    }
    Parse.urlToId = urlToId;
    function uriToId(uri) {
        return uri.split(":")[2];
    }
    Parse.uriToId = uriToId;
})(Parse || (Parse = {}));
