# Auto škola Start — Niš

Statični sajt (jedna strana), bez build koraka i bez eksternih biblioteka.

## Fajlovi
- `index.html` — sav sadržaj
- `styles.css` — boje kao CSS custom properties (`:root`), hover/focus stanja, keyframe animacije
- `script.js` — sticky nav (dva praga skrola), scroll-linked parallax u hero-u, carousel utisaka, mobilni layout (breakpoint 760px)

## Hostovanje na GitHub Pages
1. Napravi repozitorijum i ubaci ova tri fajla u root (`index.html` mora biti u rootu).
2. Settings → Pages → Source: `Deploy from a branch`, Branch: `main` / `/ (root)`, Save.
3. Sajt je za minut-dva dostupan na `https://<korisnik>.github.io/<repo>/`.

Za sopstveni domen: Settings → Pages → Custom domain (fajl `CNAME` se kreira automatski).

## Šta treba dopuniti
- **Forma za prijavu** trenutno samo prikazuje potvrdu — statično hostovanje nema backend. Poveži Formspree, Netlify Forms ili `mailto:`.
- **Linkovi društvenih mreža** u footeru vode na `#kontakt` — zameni pravim URL-ovima.
- Boje se menjaju na jednom mestu, u `:root` u `styles.css`.
