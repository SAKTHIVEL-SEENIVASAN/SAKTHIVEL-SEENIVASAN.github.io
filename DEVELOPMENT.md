# Development

The site is a single static page (`index.html`) served by GitHub Pages from the `main` branch.
There is no framework and no bundler. The only build step generates the Tailwind CSS.

## Tailwind CSS build

- Tailwind **3.4.17**, which is the version the Play CDN served before, so the utility classes and defaults are unchanged.
- Input: `src/tailwind.css`. Config: `tailwind.config.js` (it scans `index.html`, including the class names in its inline scripts).
- Output: `assets/css/tailwind.css` (minified). **This file is committed**, because GitHub Pages does not run the build.
- `index.html` links it as the last stylesheet in `<head>`, the same cascade position the Play CDN used.

Run once after cloning:

```bash
npm install
```

After adding or changing Tailwind classes in `index.html`, rebuild and commit the CSS with the page:

```bash
npm run build:css     # production build (minified)
npm run watch:css     # rebuilds automatically while you edit
```

If a new class doesn't show up on the live site, it's almost always because `assets/css/tailwind.css` wasn't rebuilt or committed.

## Run locally

```bash
python -m http.server 8000
```

Then open http://localhost:8000. Opening `index.html` directly from disk also works. The contact and enquiry forms post to Formspree, so a submission sent from a local copy still arrives as a real email.

## Not part of the site

- `node_modules/` is ignored (`.gitignore`).
- Keep private working material, such as original evidence recordings, out of the repository. GitHub rejects files over 100 MB.
