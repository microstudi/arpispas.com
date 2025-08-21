# GitHub Pages Deployment with Vite

This project is set up to deploy as a static site to GitHub Pages using GitHub Actions.

## 1. Prerequisites
- Your project repository must be pushed to GitHub.
- The repository should be public (or you must enable GitHub Pages for private repos).

## 2. Update `vite.config.js`
The `vite.config.js` is already configured for a custom domain with:

```js
base: '/'
```

## 3. Add GitHub Actions Workflow
A workflow file is provided in `.github/workflows/deploy.yml` to automate deployment.

## 4. Add CNAME File
A `CNAME` file is included in `public/` with your custom domain (`arpispas.com`).

## 5. Commit and Push
Commit your changes and push to the `main` or `master` branch.

## 6. Enable GitHub Pages
Go to your repository settings on GitHub, scroll to the "Pages" section, and set the source to the `gh-pages` branch.

---

## Local Build
To test locally:

```sh
npm run build
npm run preview
```

---

## Resources
- [Vite Docs: Deploying to GitHub Pages](https://vitejs.dev/guide/static-deploy.html#github-pages)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
