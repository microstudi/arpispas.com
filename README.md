# arpispas.com

This is the source code for the arpispas.com website.

## Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```
   The site will be available at the URL shown in the terminal (usually http://localhost:5173).

3. **Code location:**
   - Main entry: `src/main.jsx`
   - App component: `src/App.jsx`
   - Components: `src/components/`
   - Static assets: `public/`

## Deployment

1. **Build the site:**
   ```bash
   npm run build
   ```
   The production-ready files will be generated in the `dist/` directory.

2. **Preview the production build (optional):**
   ```bash
   npm run preview
   ```

3. **Deploy:**
   - Upload the contents of the `dist/` directory to your web server or static hosting provider (e.g., Vercel, Netlify, GitHub Pages).

## Requirements
- Node.js (v16 or newer recommended)
- npm

## Credits

We have to say, we adapted the code from here: https://zustand-demo.pmnd.rs/

---
Feel free to open issues or contribute!
