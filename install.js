#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const os = require('os');
const hookPath = path.join(os.homedir(), '.git-templates', 'hooks', 'post-commit');

const hookScript = `
# Git-Complimenter Hook Start
/path/to/node /path/to/compliment.js
# Git-Complimenter Hook End
`;

// Ensure the hook directory exists
fs.mkdirSync(path.dirname(hookPath), { recursive: true });

// Append the hook script to the post-commit hook, creating it if it doesn't exist
if (fs.existsSync(hookPath)) {
  let content = fs.readFileSync(hookPath, 'utf8');
  // Avoid duplicating the hook script if it's already there
  if (!content.includes('# Git-Complimenter Hook Start')) {
    fs.appendFileSync(hookPath, hookScript);
  }
} else {
  fs.writeFileSync(hookPath, hookScript);
}