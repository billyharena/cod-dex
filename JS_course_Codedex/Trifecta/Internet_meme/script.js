const memeArray = [
    "https://i.imgur.com/bSi4xLb.png",
    "https://i.imgur.com/6y0G7N0.png",
    "https://i.imgur.com/LXnRao1.png",
    "https://i.imgur.com/Qqoxh1N.png"
];

const captionArray = [
    "When you finally fix that bug",
    "Me trying to understand JavaScript closures",
    "CSS in a nutshell",
    "When the code works on the first try",
    "Trying to center an element vertically",
    "When you find a missing semicolon",
    "JavaScript promises be like...",
    "When you realize it's Monday",
    "Coding at 3 AM",
    "When you see someone using `var` in 2024",
];

let randomMeme = document.getElementById("random-meme");
let randomCaption = document.getElementById("random-caption");
let generateButton = document.getElementById("generator-button");

generateButton.addEventListener("click", function(){
    let randomIndexMA = Math.floor((Math.random()*(memeArray.length - 0) + 0));
    let randomIndexCA = Math.floor((Math.random()*(captionArray.length - 0) + 0));
    randomMeme.src = memeArray[randomIndexMA];
    randomCaption.innerText = captionArray[randomIndexCA];
});