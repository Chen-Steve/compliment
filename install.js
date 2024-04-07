#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const os = require("os");
const { execSync } = require("child_process");

// Paths
const templateDirPath = path.join(os.homedir(), '.git-templates', 'hooks');
const hookScriptPath = path.join(templateDirPath, "post-commit"); // Assuming your hook is a post-commit hook
const nodePath = process.execPath;
const complimentScriptPath = path.join(__dirname, "compliment.js");

// Hook script
const hookScript = `
# Git-Complimenter Hook Start
"${nodePath}" "${complimentScriptPath}"
# Git-Complimenter Hook End
`;

// Ensure the template hooks directory exists
fs.mkdirSync(templateDirPath, { recursive: true });

// Configure Git to use the .git-templates directory, if not already set
const currentTemplateDir = execSync('git config --global init.templateDir').toString().trim();
if (!currentTemplateDir) {
  execSync(`git config --global init.templateDir "${templateDirPath}"`);
  console.log('Configured Git to use .git-templates for hooks.');
}

// Append the hook script to the post-commit hook, creating it if it doesn't exist
if (fs.existsSync(hookScriptPath)) {
  let content = fs.readFileSync(hookScriptPath, "utf8");
  if (!content.includes("# Git-Complimenter Hook Start")) {
    fs.appendFileSync(hookScriptPath, hookScript);
    console.log('Git Complimenter hook installed.');
  }
} else {
  fs.writeFileSync(hookScriptPath, hookScript);
  console.log('Git Complimenter hook installed.');
}
