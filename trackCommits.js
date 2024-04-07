const fs = require('fs');
const path = require('path');
const os = require('os');

// Define the path for the tracking file in the user's home directory
const trackingFilePath = path.join(os.homedir(), '.git-complimenter-stats.json');

function readCommitCount() {
    // Check if the tracking file exists
    if (!fs.existsSync(trackingFilePath)) {
        return 0; // Return 0 if the file doesn't exist
    }

    // Read the content of the tracking file
    const data = fs.readFileSync(trackingFilePath, 'utf8');
    const stats = JSON.parse(data);

    return stats.commitCount || 0;
}

function incrementCommitCount() {
    const count = readCommitCount() + 1;
    const stats = { commitCount: count };

    // Write the updated count back to the tracking file
    fs.writeFileSync(trackingFilePath, JSON.stringify(stats, null, 2), 'utf8');

    return count;
}

module.exports = { incrementCommitCount };