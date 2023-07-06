import { Spotifly } from "./dist/index.js";

const sp  =  new Spotifly();

console.log(await sp.searchTracks("closer", 1))