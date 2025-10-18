# Terminal Portfolio - Complete Installation Guide

## 📋 Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Git (optional, for version control)
- A text editor (VS Code, Sublime Text, etc.)
- A GitHub account (for deployment)

## 🚀 Quick Start (Local Development)

### Step 1: Download the Project Files

Create a new folder for your portfolio:
```bash
mkdir terminal-portfolio
cd terminal-portfolio
```

### Step 2: Create the Required Files

You need to create these three main files in your project folder:

#### 2.1 Create `index-standalone.html`
Copy the entire content from the `index-standalone.html` file in this project.

#### 2.2 Create `styles.css`
Copy the entire content from the `styles.css` file in this project.

#### 2.3 Create `script.js`
Copy the entire content from the `script.js` file in this project.

### Step 3: Set Up the Assets Folder

Create the assets directory structure:
```bash
mkdir -p src/assets
```

Add your images to `src/assets/`:
- `profile-avatar.png` - Your profile picture (recommended: 96x96px)
- `project-ecommerce.png` - Project screenshot 1 (recommended: 96x96px)
- `project-design-system.png` - Project screenshot 2 (recommended: 96x96px)
- `project-analytics.png` - Project screenshot 3 (recommended: 96x96px)

### Step 4: Test Locally

Simply double-click `index-standalone.html` or open it in your browser:
```bash
# On macOS
open index-standalone.html

# On Linux
xdg-open index-standalone.html

# On Windows
start index-standalone.html
```

## 🎨 Customization

### Update Personal Information

Edit `script.js` to customize your portfolio:

**Profile Section (about command):**
```javascript
about: () => ({
    type: 'output',
    content: `
        <div class="profile-section">
            <img src="src/assets/profile-avatar.png" alt="Profile" class="profile-image">
            <div class="profile-info">
                <h2>Your Name - Your Title</h2>
                <p>🚀 Your tagline</p>
                <p>💻 Your specialization</p>
                <p>🎯 Your philosophy</p>
                <p>📍 Your location</p>
            </div>
        </div>
    `
}),
```

**Contact Information (contact command):**
```javascript
contact: () => ({
    type: 'output',
    content: `
        <div class="contact-grid">
            <div class="contact-item">
                <strong>Email:</strong>
                <span>your-email@example.com</span>
            </div>
            <div class="contact-item">
                <strong>GitHub:</strong>
                <span>github.com/yourusername</span>
            </div>
            <div class="contact-item">
                <strong>LinkedIn:</strong>
                <span>linkedin.com/in/yourusername</span>
            </div>
            <div class="contact-item">
                <strong>Twitter:</strong>
                <span>@your_handle</span>
            </div>
        </div>
    `
})
```

### Modify Colors and Theme

Edit `styles.css` to change the color scheme:

```css
:root {
    --bg-primary: hsl(215, 28%, 6%);        /* Main background */
    --bg-terminal: hsl(215, 28%, 6%);       /* Terminal background */
    --bg-window: hsl(215, 20%, 12%);        /* Window background */
    --text-primary: hsl(160, 84%, 85%);     /* Primary text color */
    --text-prompt: hsl(160, 100%, 50%);     /* Prompt color (green) */
    --text-secondary: hsl(180, 100%, 60%);  /* Secondary accent */
    --text-error: hsl(0, 84%, 60%);         /* Error messages */
    --border-color: hsl(215, 15%, 20%);     /* Border color */
    --control-red: #ff5f56;                 /* Window control buttons */
    --control-yellow: #ffbd2e;
    --control-green: #27c93f;
}
```

### Update Terminal Title

Edit `index-standalone.html`:
```html
<title>yourname@portfolio:~$ Terminal Portfolio</title>
```

And:
```html
<div class="terminal-title">
    <span>yourname@portfolio: ~</span>
    <span class="status-indicator" id="statusIndicator"></span>
</div>
```

## 🌐 Deployment Options

### Option 1: GitHub Pages (Recommended)

#### Step 1: Create a GitHub Repository

1. Go to [github.com](https://github.com)
2. Click the "+" icon → "New repository"
3. Name it: `terminal-portfolio` (or any name you prefer)
4. Make it Public
5. Do NOT initialize with README
6. Click "Create repository"

#### Step 2: Push Your Code

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit your changes
git commit -m "Initial commit: Terminal portfolio"

# Set main branch
git branch -M main

# Add remote repository (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/terminal-portfolio.git

# Push to GitHub
git push -u origin main
```

#### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click "Save"
6. Wait 2-3 minutes for deployment

#### Step 4: Access Your Site

Your site will be available at:
```
https://YOUR_USERNAME.github.io/terminal-portfolio/index-standalone.html
```

**Optional:** Rename `index-standalone.html` to `index.html` for a cleaner URL:
```
https://YOUR_USERNAME.github.io/terminal-portfolio/
```

### Option 2: Netlify

#### Step 1: Prepare Your Project

1. Create a `netlify.toml` file in your project root:

```toml
[[redirects]]
  from = "/*"
  to = "/index-standalone.html"
  status = 200
```

#### Step 2: Deploy

1. Go to [netlify.com](https://www.netlify.com)
2. Sign up/Login
3. Click "Add new site" → "Deploy manually"
4. Drag and drop your entire project folder
5. Wait for deployment to complete

Your site will be available at: `https://random-name.netlify.app`

#### Step 3: Custom Domain (Optional)

1. Go to Site settings → Domain management
2. Click "Add custom domain"
3. Follow the DNS configuration steps

### Option 3: Vercel

#### Step 1: Install Vercel CLI (Optional)

```bash
npm install -g vercel
```

#### Step 2: Deploy

**Method A: Using CLI**
```bash
cd terminal-portfolio
vercel
```

**Method B: Using Web Interface**
1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Deploy automatically

### Option 4: Simple Hosting (000webhost, InfinityFree, etc.)

1. Sign up for a free hosting account
2. Access cPanel or File Manager
3. Upload all files to `public_html` folder
4. Ensure folder structure is maintained:
   ```
   public_html/
   ├── index-standalone.html
   ├── styles.css
   ├── script.js
   └── src/
       └── assets/
           ├── profile-avatar.png
           ├── project-ecommerce.png
           ├── project-design-system.png
           └── project-analytics.png
   ```
5. Access via your domain or subdomain

## 📁 Final Project Structure

```
terminal-portfolio/
├── index-standalone.html       # Main HTML file
├── styles.css                  # All styles
├── script.js                   # Terminal logic
├── src/
│   └── assets/
│       ├── profile-avatar.png
│       ├── project-ecommerce.png
│       ├── project-design-system.png
│       └── project-analytics.png
├── README.md                   # Project documentation
└── INSTALLATION.md            # This file
```

## 🔧 Troubleshooting

### Images Not Loading

**Problem:** Images don't appear in the terminal.

**Solution:**
- Check that images are in `src/assets/` folder
- Verify image file names match exactly (case-sensitive)
- Check browser console for 404 errors (F12 → Console)
- Use relative paths: `src/assets/image.png`

### Commands Not Working

**Problem:** Typing commands does nothing.

**Solution:**
- Open browser console (F12) and check for errors
- Ensure `script.js` is loaded properly
- Check that `commandInput` element exists in HTML
- Verify JavaScript is enabled in browser

### Styling Issues

**Problem:** Terminal looks broken or unstyled.

**Solution:**
- Verify `styles.css` is in the same folder as HTML
- Check browser console for CSS loading errors
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Check that Google Fonts (JetBrains Mono) is loading

### GitHub Pages Not Working

**Problem:** Site shows 404 error.

**Solution:**
- Wait 5-10 minutes after enabling Pages
- Check that repository is Public, not Private
- Verify branch is set to `main` in Pages settings
- Ensure `index-standalone.html` exists in root folder

## 🎯 Next Steps

1. **SEO Optimization:** Add more meta tags for better search visibility
2. **Analytics:** Integrate Google Analytics or Plausible
3. **Custom Domain:** Connect your own domain name
4. **Add More Commands:** Extend functionality with new commands
5. **Dark/Light Mode:** Add theme toggle functionality
6. **Resume Download:** Add a command to download your resume

## 📝 Tips for Customization

### Add New Commands

Edit `script.js` and add to the `commands` object:

```javascript
const commands = {
    // ... existing commands
    
    resume: () => ({
        type: 'output',
        content: `
            <div class="output-line">
                <p>📄 Downloading resume...</p>
                <a href="/path/to/resume.pdf" download>Click here if download doesn't start</a>
            </div>
        `
    }),
    
    // Add your custom command here
};
```

### Change Fonts

Replace JetBrains Mono with another monospace font in `index-standalone.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600;700&display=swap" rel="stylesheet">
```

Then update `styles.css`:
```css
body {
    font-family: 'Fira Code', 'Courier New', monospace;
}
```

## 🆘 Support

If you encounter issues:

1. Check browser console for errors (F12 → Console)
2. Verify all files are in correct locations
3. Test in different browsers
4. Check GitHub Issues for similar problems
5. Review this guide again carefully

## 📜 License

This project is free to use and modify for personal and commercial purposes.

## 🌟 Credits

Built with vanilla HTML, CSS, and JavaScript. No frameworks required!

---

**Happy Coding! 🚀**

For questions or issues, refer to the troubleshooting section or check the browser console for error messages.
