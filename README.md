# Portofolio Tim — Astro + Tailwind (GitHub Pages)

## Cara Pakai
1. **Download zip**, ekstrak, lalu:
   ```bash
   npm install
   npm run dev
   ```
2. Edit `astro.config.mjs`:
   - Jika repo = `USERNAME.github.io` → set `base: '/'` atau hapus `base`.
   - Jika repo = `USERNAME/REPO` → set `site` dan `base: '/REPO'`.
3. Edit konten di `src/pages/*.astro` dan komponen di `src/components/*`.
4. **Deploy**: push ke branch `main`. GitHub Actions akan build & publish ke Pages.
   - Settings → Pages → Source: **GitHub Actions** (satu kali saja).

## Struktur
- `src/pages` → Halaman: `index.astro`, `about.astro`, `projects.astro`, `contact.astro`
- `src/layouts/BaseLayout.astro` → Layout utama + header/footer
- `src/components/ProjectCard.astro` → Kartu proyek
- `src/styles/global.css` → Tailwind
- `.github/workflows/deploy.yml` → CI untuk Pages

## Catatan
- Ubah URL form di `contact.astro` (Formspree).

