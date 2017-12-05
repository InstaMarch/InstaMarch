const {makeTag} = require("../node_modules/instapage/app.js");

const dueDate = process.argv[2];
const dueDateParagraph = makeTag("p", {}, `We agree to read this article and have until the ${dueDate} to gather evidence of their authenticity, falsity, or ambiguity:`);

process.stdout.write(dueDateParagraph);

