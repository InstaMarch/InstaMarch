const {makeTag} = require("../node_modules/instapage/app.js");

let youtubeLink = process.argv[2];
if (youtubeLink === undefined) {
    youtubeLink = "https://youtu.be/J05X6W83w-U";
}
let date = process.argv[3];
if (date === undefined) {
    date = "December 20th, 2017 at 6:30PM Pacific and 9:30PM Eastern";
}
const youTubeLinkElement = makeTag("a", {
    "href": youtubeLink
}, `Click this link to join us on YouTube Live`);
const youtubeDateEmphasisElement = makeTag("em", {}, youTubeLinkElement + date);

process.stdout.write(youtubeDateEmphasisElement);

