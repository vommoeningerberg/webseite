## Preise für Pflegeprodukte (2026-07-22)

Preisliste im Pflegeprodukte-Abschnitt der Produktseite ergänzt (neue CSS-Klasse
`.preisliste`, `style.css?v=15`): Spezialöl 25,00 €, Spezialcreme 25,00 €,
Spezialpaste 30,00 €, Schweif- und Mähnenpflege 22,00 €, Pflegeöl 17,00 €.
Spezialöl/-pflege/-öl-Preise online recherchiert (RESACA-Vertriebspartner
Naturstall-Shop, 500-ml-Preis) und von Miriam bestätigt; Spezialcreme/-paste
direkt von Miriam genannt.

## Neue Seite: Tagebuch (2026-07-22)

Neue Seite `tagebuch.html` für wöchentliche Updates, in Navigation und Fußzeile
aller Seiten verlinkt, in `sitemap.xml` eingetragen. Einträge sind einfache
`<article class="eintrag">`-Blöcke (Datum, Überschrift, Text, optional Fotos
in `.fotoreihe`) — neuen Eintrag oben in die Liste einfügen (Muster steht als
Kommentar im HTML), dann committen/pushen. Enthält aktuell den "Waschtag"-Eintrag
(beide RESACA-Fotos aus der Mail "Bild Kosmetik", `assets/tagebuch-waschtag-1/2.jpg`)
und einen Eintrag zum Pflegeprodukt-Fotowechsel. EMIL Miriam kennt die Seite über
`homepage_zusatz`/neuen Schnellbefehl "Tagebuch-Eintrag" in `variante.json`.

## Pflegeprodukt-Foto ersetzt (2026-07-22)

Das alte Pflegeprodukt-Bild (zeigte fälschlich eine Gesichtscreme) ist ersetzt
durch ein Foto aus Miriams Mail "Bild Kosmetik": RESACA-Pferdepflege
(Spezialöl, Schweif-/Mähnenpflege, Pflegeöl), die liegende Flasche im
Vordergrund (`assets/produkt-pflege.jpg`, Cache-Buster `?v=3`; ein erster
Versuch mit beiden Fotos kombiniert wurde auf Miriams Wunsch wieder durch das
Einzelfoto ersetzt). Text auf Start- und Produktseite entsprechend von
"Lederpflege" auf "Pflege für Fell, Mähne und Schweif" geändert, da die Fotos
Pferde- statt Lederpflegeprodukte zeigen. Damit ist der letzte offene Punkt aus
dem 2026-07-07-Eintrag unten erledigt.

## Umzug auf eigenes GitHub (2026-07-22)

Seite läuft jetzt über Miriams **eigenen** GitHub-Account (`vommoeningerberg`),
Repo `vommoeningerberg/webseite` (vorher: `PatrickThoma/vmb-homepage`).
GitHub Pages + Custom Domain `www.vommoeningerberg.de` sind im neuen Repo
gesetzt, HTTPS-Zertifikat genehmigt, Patrick hat die Domain aus seinem alten
Repo entfernt. DNS bei IONOS unverändert (zeigt weiter allgemein auf
GitHub-Pages-Infrastruktur, funktioniert unabhängig davon, welches Repo die
Domain "besitzt" — das steuert GitHub intern über das Custom-Domain-Feld).

**Zugang:** `gh` CLI ist auf diesem Mac (miriamthoma) als `vommoeningerberg`
angemeldet (Personal Access Token, im macOS-Schlüsselbund gespeichert).
Globaler Git-Credential-Helper (`~/.gitconfig`) ist auf `gh auth git-credential`
gesetzt — jeder `git push` von diesem Rechner auf github.com nutzt automatisch
diesen Zugang. Lokales Repo hier im Ordner (`git remote -v` zeigt
`https://github.com/vommoeningerberg/webseite.git`), Branch `main`.

**Sicherheit (erledigt, 2026-07-22):** Der Token hatte anfangs viel zu weite
Rechte (u.a. `delete_repo`, `admin:org`, `admin:enterprise`) — ist inzwischen
auf den Scope `repo` reduziert (github.com/settings/tokens), Push funktioniert
weiterhin. Miriam hat außerdem die Zwei-Faktor-Authentifizierung unter
github.com/settings/security eingerichtet (von ihr bestätigt; per API nicht
mehr einsehbar, weil der schlanke Token dafür keine Berechtigung mehr hat —
das ist beabsichtigt).

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
