# Shibam Singh Gouria - Personal Portfolio

A premium, highly animated personal portfolio website built with HTML5, CSS3, and Vanilla JavaScript.

## Features
- **Dark, Cinematic Design:** Deep navy blue and black theme with glowing accents.
- **High Performance Animations:** Uses CSS animations, transitions, and the `IntersectionObserver` API for smooth scroll reveals.
- **Fully Responsive:** Optimized for mobile, tablet, and desktop viewing.
- **No Dependencies:** Built entirely without external frameworks or libraries (No React, Tailwind, etc.).

## Setup Instructions

Since this is a static website, no complex build tools or servers are required.

1. **Local Viewing:** 
   Simply double-click on `index.html` to open it in any modern web browser.
2. **Local Server (Recommended):** 
   If you want to use local development tools (e.g., VS Code Live Server, or Python's `http.server`), navigate to the project directory and run your server of choice.
   ```bash
   npx serve .
   # or
   python -m http.server 8000
   ```
3. **Deployment:**
   Upload the entire directory structure to GitHub Pages, Netlify, or Vercel.

## Configuration

All personal information, social links, and assets are centralized in the JavaScript configuration object and the HTML markup.

### Updating Details
Open `js/script.js` and locate the `PORTFOLIO_CONFIG` object at the top of the file to easily change text, links, and paths without digging through the HTML.

### Updating Images
Replace the placeholder images inside the `assets/images/` directory with your real photos. Keep the filenames the same, or update the paths in the HTML/JS accordingly.

### Updating Resume
Replace `assets/Shibam-Singh-Gouria-Resume.pdf` with your actual PDF resume.

## Project Structure
```
/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   ├── images/
│   └── Shibam-Singh-Gouria-Resume.pdf
└── README.md
```
