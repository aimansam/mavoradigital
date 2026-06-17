# Pelan Versi Bahasa Melayu

## Matlamat

Bina versi Bahasa Melayu untuk laman Mavora Labs tanpa mengganggu versi English yang sudah ada. Versi BM perlu rasa semula jadi untuk pelanggan Malaysia, jelas tentang pakej servis website, dan masih terus membawa pengguna ke borang WhatsApp.

## Status Pelaksanaan

- Fasa 1 completed: copy English di landing page telah diaudit untuk metadata, navigation, hero, services, portfolio, packages, process, form, WhatsApp states, dan footer.
- Fasa 2 completed: nada Bahasa Melayu dan copy map implementation-ready telah ditulis dalam `docs/bahasa-melayu-copy-map.md`.
- Fasa 3 partially completed: kandungan BM telah diletakkan dalam `src/data/site/home.bm.ts`; English page masih belum diekstrak ke shared data.
- Fasa 4 completed: route `/bm/` telah dibina sebagai landing page Bahasa Melayu.
- Fasa 5 completed: WhatsApp form BM generate mesej Bahasa Melayu.
- Fasa 6 completed: route `/bm/` mempunyai metadata BM, canonical, dan `hreflang`.

## Prinsip Kandungan

- Guna Bahasa Melayu yang profesional tetapi mudah faham, bukan terlalu formal.
- Kekalkan istilah biasa seperti `website`, `landing page`, `WhatsApp`, `domain`, `hosting`, `SEO`, dan `portfolio` bila lebih natural untuk pasaran Malaysia.
- Gunakan ayat pendek, fokus kepada manfaat bisnes, kepercayaan, harga, dan langkah untuk hubungi Mavora Labs.
- Harga kekal dalam RM.
- CTA perlu jelas: `Hantar ke WhatsApp`, `Lihat Pakej`, `Bina Website Saya`, `Mula Projek`.

## Strategi URL

Cadangan awal:

```txt
/        English landing page
/bm/     Bahasa Melayu landing page
```

Gunakan `lang="ms-MY"` untuk halaman BM. Path `/bm/` lebih mudah difahami oleh pengguna Malaysia berbanding `/ms/`, walaupun kod bahasa standard ialah `ms-MY`.

## Struktur Sasaran

```txt
src/
  data/
    site/
      home.en.ts
      home.bm.ts
  pages/
    index.astro
    bm/
      index.astro
  components/
    LanguageSwitcher.astro
```

Nota: Jika mahu perubahan paling kecil dulu, `src/pages/bm/index.astro` boleh dibuat sebagai salinan sementara. Untuk maintainability, kandungan perlu dipindahkan ke fail data selepas versi BM stabil.

## Fasa 1: Audit Teks English

Senaraikan semua teks yang perlu diterjemah dari `src/pages/index.astro`.

Skop teks:

- Meta title dan description.
- Navigation dan CTA.
- Hero headline, supporting copy, trust text, dan buttons.
- Services section.
- Package/pricing section.
- Portfolio preview text.
- Process section.
- WhatsApp project request form.
- Form labels, options, loading state, success state, dan validation copy.
- Footer.

Acceptance checks:

- Tiada teks penting tertinggal.
- Copy BM tidak menjadi terjemahan literal yang kaku.
- Semua CTA masih jelas membawa ke inquiry/WhatsApp.

## Fasa 2: Tetapkan Nada Bahasa

Contoh arah copy:

```txt
English: Websites that help businesses generate sales
BM: Website yang bantu bisnes nampak dipercayai dan dapat lebih banyak pertanyaan

English: Send to WhatsApp
BM: Hantar ke WhatsApp

English: Project request
BM: Permintaan projek

English: From RM800
BM: Bermula RM800
```

Gaya yang disarankan:

- `anda` untuk panggilan pelanggan.
- `bisnes` boleh digunakan kerana lebih natural untuk audience sasaran.
- Elak ayat terlalu panjang.
- Elak istilah kerajaan/korporat yang berat seperti `perkhidmatan pembangunan laman sesawang` kecuali pada tempat yang perlu.

## Fasa 3: Ekstrak Kandungan Ke Data

Pindahkan kandungan utama daripada hardcoded Astro kepada data supaya English dan BM boleh berkongsi layout.

Deliverables:

- Tambah `src/content/site/home.en.ts`.
- Tambah `src/content/site/home.bm.ts`.
- Pastikan setiap section ada shape data yang sama.
- Simpan business logic form dan GSAP di page/component, bukan di fail content.

Acceptance checks:

- English page masih render sama.
- BM content boleh digunakan tanpa duplicate semua markup.
- TypeScript membantu kesan key translation yang tertinggal.

## Fasa 4: Bina Route `/bm/`

Tambah halaman BM di `src/pages/bm/index.astro`.

Deliverables:

- Set `<html lang="ms-MY">`.
- Guna kandungan BM dari `home.bm.ts`.
- Kekalkan layout, pakej, portfolio preview, animation, dan form behavior.
- Tambah link language switch English/BM.

Acceptance checks:

- `/bm/` boleh dibuka terus.
- Semua link anchor masih berfungsi.
- Form WhatsApp masih generate message yang betul.
- No broken layout pada mobile.

## Fasa 5: Terjemah WhatsApp Flow

WhatsApp form perlu ikut bahasa halaman.

Deliverables:

- Button BM: `Hantar ke WhatsApp`, `Menyediakan...`, `Sedia di WhatsApp`.
- Status BM: `Mesej WhatsApp sudah disediakan. Hantar di WhatsApp untuk submit permintaan projek.`
- Generated message BM untuk pelanggan yang submit dari `/bm/`.

Contoh message:

```txt
Hi Mavora Labs, saya berminat untuk bina website.

Jenis website: Landing Page
Pakej: Starter Website - Basic (RM800)
Bisnes: Restaurant / cafe
Domain: Ya, saya sudah ada domain

Nota projek:
...
```

Acceptance checks:

- English route generate English WhatsApp message.
- BM route generate BM WhatsApp message.
- Package value dan pricing tidak berubah.

## Fasa 6: SEO Dan Metadata

Tambah metadata BM dan alternate language links.

Deliverables:

- BM title dan description.
- Canonical untuk `/bm/`.
- `hreflang="en"` untuk `/`.
- `hreflang="ms-MY"` untuk `/bm/`.
- `og:locale` untuk English dan BM jika metadata sudah distrukturkan.

Acceptance checks:

- Search/social preview masih kemas.
- Browser dan screen reader tahu halaman BM menggunakan `ms-MY`.
- Language switcher boleh dicari oleh pengguna, tetapi tidak mengganggu CTA utama.

## Fasa 7: Portfolio Dan Demo BM

Untuk fasa pertama, portfolio demo boleh kekal English jika fokus hanya landing page Mavora Labs. Bila sudah stabil, tambah BM untuk portfolio index dan demo copy.

Pilihan:

- Minimum: BM landing page link ke portfolio English sedia ada.
- Better: BM portfolio listing dengan demo title/description BM.
- Full: Burger demo juga ada BM route seperti `/bm/portfolio/burger-shop/`.

Cadangan sekarang:

Mulakan dengan BM landing page dahulu. Portfolio demo BM boleh jadi fasa selepas landing page siap.

## Fasa 8: QA

Semak BM route secara manual dan automasi ringan.

Checklist:

- Build lulus: `corepack pnpm build`.
- `/` masih English.
- `/bm/` render BM.
- Mobile layout tiada teks overflow.
- Language switcher berfungsi.
- WhatsApp message BM betul.
- CTA utama masih jelas.
- `lang="ms-MY"` wujud pada halaman BM.

## Risiko

- Duplicate page penuh akan cepat susah maintain jika English berubah.
- Terjemahan literal boleh rasa kurang meyakinkan.
- Form script sekarang mengandungi teks English, jadi perlu distrukturkan supaya boleh pilih copy ikut bahasa.
- Jika portfolio BM dibuat terlalu awal, scope boleh membesar melebihi landing page.

## Cadangan Langkah Seterusnya

Teruskan dengan polish selepas launch: ekstrak kandungan English ke `src/data/site/home.en.ts` dan gabungkan layout English/BM jika maintainability menjadi keutamaan seterusnya.