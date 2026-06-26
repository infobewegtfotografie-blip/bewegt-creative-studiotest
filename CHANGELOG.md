# BEWEGT CREATIVE STUDIO v1.0.0 — Changelog

## Fixed
- Replaced all legacy `contact@bewegtstudio.com` references with `contact@bewegtcreative.com`.
- Added Google Analytics 4 and Microsoft Clarity tracking to all public HTML pages.
- Added universal event tracking for WhatsApp clicks, email clicks and form submissions.
- Added missing i18n keys for `sound.play`, `sound.pause` and sound accessibility labels.
- Merged late i18n additions into the initial translations object to prevent visible translation flashes.
- Refactored the sound label logic to use the translation dictionary.
- Added missing portfolio item `31-podcast-production-studio.png` to the homepage portfolio grid.
- Removed inactive Instagram and LinkedIn footer links that pointed to `#`.
- Added Netlify 404 fallback redirect to `404.html`.
- Updated sitemap `lastmod` values to `2026-06-25`.
- Added targeted CSS fix so the German title `Videoproduktion` is not cut off.
- Renamed raw AI export filenames in the portfolio from `chatgpt-image...` to cleaner production filenames and updated references.

## Verified
- `script.js` passes JavaScript syntax check.
- All `data-i18n` and `data-i18n-html` keys used in HTML exist for EN / FR / DE.
- No local image, script, stylesheet, audio or internal page reference is missing.
- No legacy email address remains.
- No placeholder social link `href="#"` remains.
