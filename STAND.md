# STAND vMB-Homepage (2026-07-07)

**LIVE unter eigener Domain: https://www.vommoeningerberg.de** (HTTPS erzwungen; ohne-www leitet auf www um). Vier Seiten (Start, Produkte, Kontakt, Impressum), Design nach Visitenkarte (Creme/Braun/Gold), Schreibweise "vom MöningerBerg GmbH".

**Technik:** Seite läuft auf GitHub Pages (Repo PatrickThoma/vmb-homepage), Domain bei IONOS. Bei IONOS zeigen A/AAAA (@) auf die GitHub-Pages-IPs und www als CNAME auf patrickthoma.github.io; Mail-Records unverändert, kein IONOS-Webspace. Custom Domain im Repo gesetzt (CNAME-Datei). Änderungen: lokal in diesem Ordner bearbeiten, dann ins Repo pushen (rsync + git push), landet automatisch auf der Domain. Assets mit `?v=N` gegen Browser-Cache.

**Logo:** Neu nach Briefbogen des Grafikers als Vektor (`assets/logo-vmb.svg` + `logo-vmb-2000/4000.png`), Bogenschrift Dancing Script Bold, Schrift/Kompassspitzen dunkelgrün, "GmbH", Goldband ums Pferd, kein Hero-Goldrahmen. Quellen: `../logo-werkstatt/` (build_logo_neu.py, Font dabei).

**Inhalte:** Hero-Hintergrund Tamino-Foto (2K), Claim "Maßgefertigte Handwerkskunst & individuelles Coaching für Mensch und Tier". Miriam-Foto im Handling-Abschnitt (Start + Produkte). KI-Bild "Sattelsuche" beim Diebstahlschutz. E-Mail info@vommoeningerberg.de überall. Impressum: Geschäftsführerin + MStV-Verantwortliche Miriam Thoma. Bild-Originale in `../ki-bilder/`.

**Produktseite (2026-07-07):** Alle "Foto folgt"-Platzhalter ersetzt durch echte Fotos aus Hans' Mails: Hufglocken (Einzelfoto), Lederwaren jeder Art (2x2-Galerie: Hundeleine Oscar, Halsband Leo, Löwen-Geldbeutel, Bär-Brillenetui), Leder-Reparaturen (Vorher/Nachher Geldbeutel), Pflegeprodukte. Web-Dateien `assets/produkt-*.jpg`, Original-Fotos aller 23 Zusendungen in `../produktfotos/`. Hinweis offen: Pflege-Bild zeigt eine Gesichtscreme (AURA BOTANICA), Seitentext spricht von Lederpflege.

**Textkorrektur Hufglocken (2026-07-09):** Auf Hans' Ansage: Hufglocken sind aus fast unzerstörbarem, recyceltem Material (nicht Leder). Text auf Start- und Produktseite entsprechend geändert (Cache `?v=11`), live. Zusatz 2026-07-14: "Fesse" → "Fessel" korrigiert.

**Bekanntmachen / SEO-Basis (2026-07-14):** Auffindbarkeit + Teilbarkeit eingebaut, live. Open-Graph/Twitter-Tags (schöne Link-Vorschau beim Teilen auf FB/WhatsApp) auf Start/Produkte/Kontakt, dediziertes Vorschaubild `assets/og-vorschau.jpg` (Logo + Name + Claim, 1200x630), Favicon (`assets/favicon.ico/.png`), `sitemap.xml` + `robots.txt`, LocalBusiness-JSON-LD auf der Startseite (Adresse/Tel/Mail für Google). Impressum bleibt noindex. Nächste, stärkere Hebel (brauchen Hans): Google Business Profil (lokale Suche/Maps), Google Search Console (Sitemap einreichen), organische Social-Posts auf der eigenen FB-Seite.

Offen: Impressum-Pflichtangaben (Registergericht, HRB, USt-IdNr.). Pflegeprodukt-Bild ggf. tauschen (Gesichtscreme vs. Lederpflege).

Details + Gotchas: `mein-brain/unternehmen/vom-moeningerberg/vom-moeningerberg-homepage-uebersicht.md`
