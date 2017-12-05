const {makeTag} = require("../node_modules/instapage/app.js");

const date = process.argv[2];
const link = makeTag("a", {
    "href": "#information-study-group"
}, `News and Information Study Group, ${date}`);

process.stdout.write(link);
