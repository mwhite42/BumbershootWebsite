# Bumbershoot Unlimited Website

This is the repository for the Bumbershoot Unlimited company website. It's a single-page React application that uses the content from the README.md file.

## Development

### Prerequisites
- Node.js (v18 or higher)
- npm (v9 or higher)

### Setup
1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```

### Building
To build the site for production:
```
npm run build
```

### Deployment
The site is automatically deployed to GitHub Pages when changes are pushed to the main branch. You can also manually deploy by running:
```
npm run deploy
```

## Structure
- `public/` - Static assets
- `src/` - React application source code
  - `src/content.js` - Website content in structured format
  - `src/App.jsx` - Main application component
  - `src/assets/` - Application assets like logos and icons
- `.github/workflows/` - GitHub Actions workflow for automated deployment

## Content Management
The website content is managed directly in the React application through the `src/content.js` file. When updating content:

1. Edit the `src/content.js` file to update the company information or section content
2. The changes will be reflected in the React components automatically
3. Commit and push your changes

## Technologies Used
- React
- Vite
- react-icons (Font Awesome icons)
- CSS3 (animations, gradients, and transitions)
- GitHub Pages
- GitHub Actions

## Visual Design Features
The website includes several visual enhancements:

### Icons
- Section headers feature relevant icons that represent the content
- List items have context-specific icons
- Social media links in the footer
- All icons have hover animations

### Animations and Effects
- Hover effects on navigation links, sections, and buttons
- Subtle animations for icons and interactive elements
- Logo rotation and scaling on hover
- Underline animations for text elements

### Layout and Design
- Gradient backgrounds in header and footer
- Logo used as a subtle background watermark
- Visual separators between sections
- Responsive design that works on mobile, tablet, and desktop
- Card-like sections with hover effects

### Customization
To modify the visual design:

1. Color scheme: Edit the CSS variables in `src/App.css` (lines 1-10)
2. Icons: Change icons in `src/App.jsx` by importing different icons from react-icons
3. Animations: Adjust transition properties in the CSS for different animation speeds
4. Background elements: Modify the opacity and size of the logo background in the main section