const {makeTag} = require("../node_modules/instapage/app.js");

let date = process.argv[2];
if (process.argv[2] === undefined) {
    date = "December 20th, 2017 6:30 Pacific and 9:30 Eastern"
}
const link = makeTag("a", {
    "href": "#information-study-group"
}, `News and Information Study Group, ${date}`);

process.stdout.write(link);
