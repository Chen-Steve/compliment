#!/usr/bin/env node

const compliments = [
    "Great job!",
    "You're doing awesome!",
    "Keep up the good work!",
    "Well done!",
    "That's some high-quality code!",
    "You're a Git master!",
    "Commit achieved!",
    "Code on point!",
    "That's how you make progress!",
    "Another step closer to completion!"
  ];
  
  const randomCompliment = compliments[Math.floor(Math.random() * compliments.length)];
  console.log(randomCompliment);  