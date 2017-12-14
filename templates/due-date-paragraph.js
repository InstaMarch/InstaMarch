const {makeTag} = require("../node_modules/instapage/app.js");

let dueDate = process.argv[2];
if (process.argv[2] === undefined) {
    dueDate = "third Wednesday of December";
}

const dueDateParagraph = makeTag("p", {}, `We agree to read this article and have until the ${dueDate} to gather evidence of its authenticity, falsity, or ambiguity:`);

process.stdout.write(dueDateParagraph);

