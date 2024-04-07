# complimenter

A delightful npm package designed to boost your spirits! `complimenter` compliments you every time you commit to a Git repository.

## Features

- **Boosts Morale**: Receive an uplifting compliment with every commit.
- **Easy Integration**: Seamlessly integrates with any Git repository.
- **Fully Customizable**: Fork and customize compliments to match your preferences.

## Installation

You can install `complimenter` globally on your machine using npm. This enables the compliments to be available across all your Git repositories.

```bash
npm install -g complimenter
```

## Setup
To ensure complimenter functions correctly, you'll need to set up your Git environment to use a custom directory for Git hooks.

For Unix/Linux/macOS Users:
Run the following command in your terminal:

```bash
mkdir -p ~/.git-templates/hooks
git config --global init.templateDir '~/.git-templates'
```

This creates a .git-templates/hooks directory in your home folder and configures Git to use it as the template directory.

# For Windows Users (PowerShell):
Run the following command in PowerShell:

```bash
$TemplateHooksPath = Join-Path -Path $HOME -ChildPath ".git-templates\hooks"
if (-Not (Test-Path -Path $TemplateHooksPath)) {
    New-Item -ItemType Directory -Path $TemplateHooksPath
}
git config --global init.templateDir $TemplateHooksPath
```

# Usage
After installation and setup, proceed with your Git operations as usual. complimenter works in the background, and you will see a compliment appear in your terminal after each commit you make.

There's no additional setup required in your project. Just keep committing, and complimenter will keep the compliments coming.

# How It Works
complimenter uses a Git post-commit hook to execute a script that outputs a random compliment. This hook is triggered after every commit you make to a Git repository.

# Customizing Compliments
Feel free to fork the project and customize the list of compliments. This allows you to personalize your experience or add context-specific encouragement for you and your team.

# Contributing
Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

# Fork the Project
Create your Feature Branch (git checkout -b feature/AmazingFeature)
Commit your Changes (git commit -m 'Add some AmazingFeature')
Push to the Branch (git push origin feature/AmazingFeature)
Open a Pull Request
License
Distributed under the MIT License. See LICENSE for more information.

# Contact
Steven Chen - chensteven2077@gmail.com

Project Link: https://github.com/Chen-Steve/git-complimenter