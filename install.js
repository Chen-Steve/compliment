#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const os = require("os");

// Get the path to the Node.js executable
const nodePath = process.execPath;
// Construct the path to compliment.js assuming it's in the same directory as install.js
const complimentScriptPath = path.join(__dirname, "compliment.js");
// Define the path for the post-commit hook in the user's home directory
const hookPath = path.join(
  os.homedir(),
  ".git-templates",
  "hooks",
  "post-commit"
);

// Construct the hook script with dynamic paths
const hookScript = `
# Git-Complimenter Hook Start
"${nodePath}" "${complimentScriptPath}"
# Git-Complimenter Hook End
`;

// Ensure the hook directory exists
fs.mkdirSync(path.dirname(hookPath), { recursive: true });

// Append the hook script to the post-commit hook, creating it if it doesn't exist
if (fs.existsSync(hookPath)) {
  let content = fs.readFileSync(hookPath, "utf8");
  // Avoid duplicating the hook script if it's already there
  if (!content.includes("# Git-Complimenter Hook Start")) {
    fs.appendFileSync(hookPath, hookScript);
  }
} else {
  fs.writeFileSync(hookPath, hookScript);
}
