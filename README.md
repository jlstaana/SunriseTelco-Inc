
# SunriseTelco Inc. — Website

This repository contains the front-end source for the SunriseTelco Inc. website — a static website project that demonstrates the company's public pages, customer portal, and admin interfaces.

## Project Summary

Contents are HTML, CSS and JavaScript files organized into logical folders for pages, shared components, images, styles, and scripts. The site is intended to be hosted as a static website (for example on Netlify, GitHub Pages, or a simple web server).

Key areas in the repository:

- `pages/` — Public-facing site pages (home, plans, support, contact, blog, etc.).
- `portal/` — Customer portal pages (account, billing, usage, tickets).
- `admin/` — Admin dashboard and management pages.
- `components/` — Reusable HTML fragments such as header and footer.
- `styles/` — CSS files scoped by page or feature.
- `script/` — JavaScript files for interactive features and utilities.
- `images/` — Image assets used across the site.

## Prerequisites

- A modern web browser to open and test the HTML files locally.
- Optional: a local web server for testing (recommended) such as the following tools:
	- `python -m http.server` (Python 3)
	- `npx http-server` (Node.js)

## Local Preview

To preview the site locally using Python (from the repository root):

1. Open a terminal in the project folder.
2. Run the following command:

```powershell
python -m http.server 8000
```

Then open http://localhost:8000 in your browser. For Node.js users with `http-server` installed use:

```powershell
npx http-server -p 8000
```

Note: Some pages expect the `components/header.html` and `components/footer.html` to be included server-side or via client-side includes — previewing with a local server ensures relative includes and paths behave consistently.

## Project Structure (high level)

```
components/      - shared header, footer, and other partials
images/          - image assets
pages/           - public site pages
portal/          - customer portal pages
admin/           - admin pages
script/          - JavaScript behavior and utilities
styles/          - CSS files
README.md        - this file
```

## Contributing

Contributions are welcome. Typical workflow:

1. Fork the repository.
2. Create a feature branch (git checkout -b feature/short-description).
3. Make changes and include clear commit messages.
4. Open a pull request describing the changes and any testing steps.

Coding style notes:

- Keep styles scoped where possible (existing CSS files are organized per page/feature).
- Keep shared header/footer markup in `components/` for reuse.
- Use semantic HTML and accessible forms for public pages.

## Deployment

This project is static and deployable to any static hosting platform (GitHub Pages, Netlify, Vercel, S3 + CloudFront, etc.). Ensure you configure the hosting platform to serve `pages/index.html` or the repository root as the site entry.

## Support and Contact

If you need help with this codebase, open an issue in the repository or contact the repository owner.

Repository owner: jlstaana

---

If you'd like, I can also:

- Add a `CONTRIBUTING.md` with a suggested development workflow.
- Create a short checklist for accessibility and SEO checks.
- Add a `readme.txt` copy if you specifically want a `.txt` file for other systems.
