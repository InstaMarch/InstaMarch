const {makeTag} = require("../node_modules/instapage/app.js");

const youtubeLink = process.argv[2];
const date = process.argv[3];
const youTubeLinkElement = makeTag("a", {
    "href": youtubeLink
}, `Click this link to join us on YouTube Live`);
const youtubeDateEmphasisElement = makeTag("em", {}, youTubeLinkElement + date);

process.stdout.write(youtubeDateEmphasisElement);

