# comlec-assignment-for-kisch

# COMLEC Assignment — Kisch

A small static website assignment intended to be shared with teachers for review.

This repository contains the source for a lightweight school assignment site. The project is built with plain HTML, CSS and a small Node.js utility used to produce responsive image assets.

## Live demo

The site is deployed to Vercel for quick access and review.

## What's in this repo

- `index.html` — the site HTML
- `styles.css` — site styles
- `img/` — original source images (kept in the repo)
- `optimized_img/` — build-time generated responsive images (ignored from git)
- `resize-images.js` — Node.js script (uses `sharp`) to generate multiple sizes and WebP variants
- `package.json` — npm scripts and dependencies

## Local development

1. Install dependencies:

```powershell
npm ci
```

2. Generate responsive images (writes to `optimized_img/`):

```powershell
npm run resize
```

3. Open `index.html` in your browser or serve it with a simple static server.

## Notes on version control

Generated images are intentionally not committed to the repository. The folder `optimized_img/` is recorded in git with a small marker file so the structure is visible, but actual image files are produced at build time and excluded via `.gitignore`.

## License

This is a small student project — feel free to use the code for learning purposes.

---

*Easter Egg:* If you're reading this — surprise! It was me, **Deign Lazaro**, who did all this. (I was your student once :>)

```
