# Deployment Instructions

## Overview of Changes Made

To fix the 404 errors for .js and .css files on GitHub Pages, the following changes were made:

1. Added a `.nojekyll` file in the repository root to prevent GitHub Pages from using Jekyll processing.
2. Modified `package.json` to add a `postbuild` script that creates a `.nojekyll` file in the `dist` directory after each build.

## Steps to Rebuild and Redeploy

Follow these steps to apply the changes and redeploy the site:

### Option 1: Using GitHub Actions (Recommended)

1. Commit and push the changes to the main branch:
   ```bash
   git add .
   git commit -m "Add .nojekyll file and postbuild script to fix 404 errors"
   git push origin main
   ```

2. The GitHub Actions workflow will automatically trigger and deploy the site to GitHub Pages.

3. Wait for the workflow to complete (you can check the status in the "Actions" tab of your GitHub repository).

4. Once the workflow is complete, visit your site at https://mwhite42.github.io/website to verify that the assets are loading correctly.

### Option 2: Manual Deployment

If you prefer to deploy manually:

1. Rebuild the project:
   ```bash
   npm run build
   ```

2. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   ```

3. Visit your site at https://mwhite42.github.io/website to verify that the assets are loading correctly.

## Troubleshooting

If you still encounter 404 errors after deploying:

1. Check the browser's developer console for specific error messages.
2. Verify that the `.nojekyll` file exists in both the repository root and the deployed site.
3. Clear your browser cache and try again.
4. Check the GitHub Pages settings in your repository to ensure it's configured to deploy from the correct branch/directory.