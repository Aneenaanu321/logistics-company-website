# GitHub Setup Guide

Your project is ready to be pushed to GitHub! Follow these steps:

## Step 1: Create a GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the **"+"** icon in the top right corner
3. Select **"New repository"**
4. Fill in the details:
   - **Repository name**: `logistics-company-website` (or any name you prefer)
   - **Description**: "Modern logistics company website built with Next.js, TypeScript, and Tailwind CSS"
   - **Visibility**: Choose Public or Private
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
5. Click **"Create repository"**

## Step 2: Connect Your Local Repository to GitHub

After creating the repository, GitHub will show you commands. Use these commands:

### Option A: If you haven't created the repository yet
```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

### Option B: If you already created the repository
GitHub will show you the exact commands. They will look like:
```bash
git remote add origin https://github.com/YOUR_USERNAME/logistics-company-website.git
git branch -M main
git push -u origin main
```

## Step 3: Push Your Code

Run the commands from Step 2. Replace:
- `YOUR_USERNAME` with your GitHub username
- `YOUR_REPO_NAME` with your repository name

## Quick Commands (Copy and paste after creating repo on GitHub)

```bash
# Add remote (replace with your actual GitHub repo URL)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

## What's Already Done ✅

- ✅ Git repository initialized
- ✅ All files committed
- ✅ .gitignore configured
- ✅ Ready to push!

## Future Updates

After making changes to your code:

```bash
git add .
git commit -m "Your commit message"
git push
```

## Troubleshooting

### If you get "remote origin already exists":
```bash
git remote remove origin
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
```

### If you need to change the branch name:
```bash
git branch -M main
```

### If authentication fails:
- Use GitHub Personal Access Token instead of password
- Or use GitHub CLI: `gh auth login`

---

**Need help?** Check GitHub's documentation: https://docs.github.com/en/get-started/importing-your-projects-to-github/importing-source-code-to-github

