(function () {
  var INDEX = [
    { titel: "Start", url: "index.html", text: "Start Startseite Handgemachte Lederwaren Pferde-Coaching vom Möningerberg Was wir machen Handarbeit die man sieht und das Pferd spürt drucklose Zäume Reparaturen Pflegeprodukte Handwerk" },
    { titel: "Produkte & Leistungen", url: "produkte.html", text: "Produkte Leistungen Übersicht Katalog" },
    { titel: "Zäume drucklos auf den Pferdekopf", url: "produkte.html#zaeume", text: "Zäume drucklos Zaum Pferdekopf feine Details ehrliche Handarbeit" },
    { titel: "Hufglocken", url: "produkte.html#hufglocken", text: "Hufglocken Huf Glocken" },
    { titel: "Halsbänder & Lederwaren jeder Art für Tiere", url: "produkte.html#lederwaren", text: "Lederwaren Hundeleine Halsband Halsbänder Hundehalsband Geldbeutel Brillenetui Leine" },
    { titel: "Diebstahlschutz für Sättel", url: "produkte.html#diebstahlschutz", text: "Diebstahlschutz Sättel Sattel Sattelsuche Ortung GPS Diebstahl wiederfinden" },
    { titel: "Leder-Reparaturen", url: "produkte.html#reparaturen", text: "Leder Reparaturen reparieren Naht Zaum Halfter Geldbeutel kaputt" },
    { titel: "Meta Gloss – Anti-Filz, Volumen & Glanz", url: "produkte.html#metagloss", text: "Meta Gloss Anti-Filz Filz Volumen Glanz Fell Mähne Schweif" },
    { titel: "Pflegeprodukte", url: "produkte.html#pflege", text: "Pflegeprodukte Spezialöl Spezialcreme Spezialpaste Schweifpflege Mähnenpflege Pflegeöl RESACA Pflege" },
    { titel: "Pferdecoaching Miriam", url: "produkte.html#handling", text: "Pferdecoaching Handling Pferde Coaching Miriam Bodenarbeit" },
    { titel: "Tagebuch", url: "tagebuch.html", text: "Tagebuch wöchentliche Updates Kundenauftrag Lederhalsband Eyva Näharbeiten Markisen Zelte Segel Meta Gloss Vermessung Tamino Zaum Waschtag Pflegeprodukte News Neuigkeiten" },
    { titel: "Kontakt", url: "kontakt.html", text: "Kontakt Telefon E-Mail Adresse Termine Anfahrt erreichen" },
    { titel: "Anleitung zum Vermessen", url: "anleitung-vermessen.html", text: "Anleitung Vermessen Maß nehmen Zaum Tamino Horse Accessoires Kerstin Rauch" },
    { titel: "Weihnachtsgeschenk-Aktion", url: "weihnachtsgeschenk-aktion.html", text: "Weihnachtsgeschenk-Aktion Weihnachten Rabatt Gutschein Lederaufbereitung Auto Reparatur Ledertasche Gürtel Punzieren Gravur Geldbeutel Reithalfter Hundehalsband Zaum Biothane Hufglocken Pflegemittel Beratung" },
    { titel: "Impressum", url: "impressum.html", text: "Impressum" },
    { titel: "Datenschutz", url: "datenschutz.html", text: "Datenschutz Datenschutzerklärung DSGVO" }
  ];

  function normalisieren(s) {
    return s
      .toLowerCase()
      .replace(/ä/g, "a").replace(/ö/g, "o").replace(/ü/g, "u").replace(/ß/g, "ss")
      .replace(/[^a-z0-9\s]/g, " ");
  }

  INDEX.forEach(function (eintrag) {
    eintrag._suchtext = normalisieren(eintrag.titel + " " + eintrag.text);
  });

  // Keine echten Synonyme, sondern Begriffe, die Kunden oft mit einem anderen
  // Angebot verwechseln – führt trotzdem zum vermutlich gemeinten Eintrag,
  // ohne den Begriff so zu tun als stünde er inhaltlich auf der Zielseite.
  var VERWECHSLUNGEN = {
    "halfter": ["produkte.html#zaeume"]
  };

  // Startvorschläge, bevor der Besucher etwas eingibt – da wir keine echten
  // Suchstatistiken erfassen, ist das eine von Hand kuratierte Auswahl der
  // Kernangebote, keine tatsächlichen "häufig gesucht"-Daten.
  var HAEUFIG_GESUCHT_URLS = [
    "produkte.html#zaeume",
    "produkte.html#lederwaren",
    "produkte.html#diebstahlschutz",
    "produkte.html#reparaturen",
    "produkte.html#pflege",
    "kontakt.html"
  ];

  function suchen(anfrage) {
    var begriffe = normalisieren(anfrage).split(/\s+/).filter(Boolean);
    if (!begriffe.length) return [];

    var treffer = INDEX
      .map(function (eintrag) {
        var passt = begriffe.every(function (b) { return eintrag._suchtext.indexOf(b) !== -1; });
        if (!passt) return null;
        var titelTreffer = normalisieren(eintrag.titel).indexOf(begriffe[0]) !== -1;
        return { eintrag: eintrag, rang: titelTreffer ? 0 : 1 };
      })
      .filter(Boolean)
      .sort(function (a, b) { return a.rang - b.rang; })
      .map(function (r) { return r.eintrag; });

    var vermuteteUrls = [];
    begriffe.forEach(function (b) {
      (VERWECHSLUNGEN[b] || []).forEach(function (url) {
        if (vermuteteUrls.indexOf(url) === -1) vermuteteUrls.push(url);
      });
    });
    vermuteteUrls.forEach(function (url) {
      var eintrag = INDEX.filter(function (e) { return e.url === url; })[0];
      if (!eintrag) return;
      treffer = treffer.filter(function (e) { return e !== eintrag; });
      treffer.unshift(eintrag);
    });

    return treffer.slice(0, 8);
  }

  function init() {
    var knopf = document.querySelector(".suche-knopf");
    var panel = document.querySelector(".suche-panel");
    var eingabe = document.querySelector(".suche-eingabe");
    var hinweis = document.querySelector(".suche-hinweis");
    var ergebnisListe = document.querySelector(".suche-ergebnisse");
    if (!knopf || !panel || !eingabe || !hinweis || !ergebnisListe) return;

    function listeRendern(eintraege) {
      ergebnisListe.innerHTML = "";
      eintraege.forEach(function (eintrag) {
        var li = document.createElement("li");
        var a = document.createElement("a");
        a.href = eintrag.url;
        a.textContent = eintrag.titel;
        li.appendChild(a);
        ergebnisListe.appendChild(li);
      });
    }

    function vorschlaegeZeigen() {
      hinweis.hidden = false;
      var eintraege = HAEUFIG_GESUCHT_URLS
        .map(function (url) { return INDEX.filter(function (e) { return e.url === url; })[0]; })
        .filter(Boolean);
      listeRendern(eintraege);
    }

    var menuKnopf = document.querySelector(".menu-knopf");
    var menuNav = document.querySelector("nav.main");

    function menuSchliessen() {
      if (!menuKnopf || !menuNav) return;
      menuNav.classList.remove("offen");
      menuKnopf.setAttribute("aria-expanded", "false");
    }

    function oeffnen() {
      menuSchliessen();
      panel.hidden = false;
      knopf.setAttribute("aria-expanded", "true");
      eingabe.focus();
      if (!eingabe.value.trim()) vorschlaegeZeigen();
    }
    function schliessen() {
      panel.hidden = true;
      knopf.setAttribute("aria-expanded", "false");
    }

    knopf.addEventListener("click", function () {
      if (panel.hidden) oeffnen(); else schliessen();
    });
    document.addEventListener("click", function (e) {
      if (!panel.hidden && !panel.contains(e.target) && e.target !== knopf) schliessen();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") { schliessen(); menuSchliessen(); }
    });

    if (menuKnopf && menuNav) {
      menuKnopf.addEventListener("click", function () {
        var offen = menuNav.classList.toggle("offen");
        menuKnopf.setAttribute("aria-expanded", offen ? "true" : "false");
        if (offen) schliessen();
      });
      document.addEventListener("click", function (e) {
        if (menuNav.classList.contains("offen") && !menuNav.contains(e.target) && e.target !== menuKnopf) {
          menuSchliessen();
        }
      });
    }

    eingabe.addEventListener("input", function () {
      if (!eingabe.value.trim()) {
        vorschlaegeZeigen();
        return;
      }
      hinweis.hidden = true;
      var treffer = suchen(eingabe.value);
      if (!treffer.length) {
        ergebnisListe.innerHTML = "";
        var leer = document.createElement("li");
        leer.className = "suche-leer";
        leer.textContent = "Keine Treffer für „" + eingabe.value + "“.";
        ergebnisListe.appendChild(leer);
        return;
      }
      listeRendern(treffer);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
