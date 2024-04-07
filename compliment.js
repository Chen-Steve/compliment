#!/usr/bin/env node
const { incrementCommitCount } = require('./trackCommits');

const compliments = [
    "Your code is so sleek, it makes my CPU cool down!",
    "You're the semicolon to my statements; without you, things just fall apart.",
    "If debugging is the process of removing software bugs, then programming must be the process of putting them in. But not you, you're an exception!",
    "You commit like Picasso paints: often and with passion!",
    "Your code doesn't just work; it performs a ballet.",
    "You're not just a programmer; you're a problem-solving maestro.",
    "Is it hot in here, or is it just your 🔥 commits?",
    "You must be a Git branch, because you're always ahead of the curve.",
    "Your coding skills are so good, you must have a PhD in problem solving.",
    "If code were a canvas, every commit you make would be a masterpiece."
];

const milestoneCompliments = {
    10: "🎉 Double digits! You're not just playing the game; you're changing it. 🎉",
    50: "🎉 50 commits! You're half a centurion in the coding colosseum! 🎉",
    100: "🎉 Welcome to the Century Club! Your commitment is legendary. 🎉",
    500: "🎉 500 commits! If commits were miles, you'd have just crossed a continent. 🎉",
    1000: "🎉 1000 commits! You're not just coding; you're making history. Here's to 1000 more moments of brilliance! 🎉"
};

const milestones = [10, 50, 100, 500, 1000];

const commitCount = incrementCommitCount();
const randomCompliment = compliments[Math.floor(Math.random() * compliments.length)];

console.log(randomCompliment);

// Check and congratulate the user if they've reached a milestone
if (milestones.includes(commitCount)) {
    console.log(milestoneCompliments[commitCount]); // Use milestone-specific compliment
}
