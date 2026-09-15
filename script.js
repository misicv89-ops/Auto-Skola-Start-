/* Auto škola Start — nav, hero parallax, carousel, mobile layout. No dependencies. */
(function () {
  "use strict";
  var MOBILE = 760;
  var q = function (s) { return document.querySelector(s); };
  var qa = function (s) { return Array.prototype.slice.call(document.querySelectorAll(s)); };

  var nav = q(".nav_wrap"), navInner = q(".nav_inner"), logo = q(".nav_logo_mark");
  var navMenu = q(".nav_menu"), burger = q(".nav_burger");
  var hero = q(".section_hero"), skyline = q(".hero_layer_skyline");
  var signs = q(".hero_layer_signs"), road = q(".hero_layer_road");
  var menuOpen = false, accent = null;

  /* ---- scroll: two nav thresholds + scroll-linked hero parallax + per-section accent ---- */
  function onScroll() {
    var y = window.scrollY || window.pageYOffset || 0;
    if (nav) {
      var pinned = y > 80;
      nav.style.boxShadow = pinned ? "0 10px 30px rgba(0,0,0,.35)" : "none";
      nav.style.background = pinned ? "rgba(14,15,16,.94)" : "var(--black)";
      nav.style.backdropFilter = pinned ? "blur(8px)" : "none";
    }
    var compact = y > 54;
    if (navInner) navInner.style.minHeight = compact ? "64px" : "86px";
    if (logo) {
      logo.style.width = compact ? "34px" : "44px";
      logo.style.height = compact ? "34px" : "44px";
      logo.style.fontSize = compact ? "19px" : "24px";
    }
    if (hero) {
      var r = hero.getBoundingClientRect();
      var p = Math.max(0, -r.top);
      var rel = Math.min(1, p / Math.max(1, r.height));
      if (skyline) skyline.style.transform = "translate3d(" + (-rel * 60) + "px," + (p * 0.14) + "px,0)";
      if (signs) signs.style.transform = "translate3d(" + (-rel * 140) + "px," + (p * 0.42) + "px,0)";
      if (road) road.style.transform = "translate3d(" + (rel * 90) + "px," + (p * 0.52) + "px,0)";
    }
    var a = null;
    qa("[data-accent]").forEach(function (s) {
      if (s.getBoundingClientRect().top <= 120) a = s.getAttribute("data-accent");
    });
    if (a && nav && a !== accent) { accent = a; nav.style.setProperty("--accent", a); }
  }

  /* ---- responsive: mobile layout applied over the authored inline styles ---- */
  function patch(sel, styles) {
    qa(sel).forEach(function (el) {
      if (el._baseCss === undefined) el._baseCss = el.getAttribute("style") || "";
      el.setAttribute("style", el._baseCss);
      if (window.innerWidth <= MOBILE) Object.assign(el.style, styles);
    });
  }

  function onResize() {
    var m = window.innerWidth <= MOBILE;
    if (burger) burger.style.display = m ? "flex" : "none";

    patch(".nav_menu", {
      position: "absolute", left: "0", right: "0", top: "100%",
      flexDirection: "column", alignItems: "stretch", gap: "0",
      background: "var(--black)", borderTop: "1px solid #2A2E32",
      padding: menuOpen ? "14px 20px 22px" : "0 20px",
      maxHeight: menuOpen ? "70vh" : "0", overflow: "hidden",
      transition: "max-height .35s ease, padding .35s ease"
    });
    patch(".nav_link", { fontSize: "16px", padding: "14px 0", width: "100%", textAlign: "center", backgroundPosition: "50% 100%" });
    patch(".nav_cta", { textAlign: "center", marginTop: "10px", padding: "14px 20px", fontSize: "17px" });
    patch(".nav_inner", { position: "relative", padding: "0 20px" });
    patch(".nav_logo_text", { fontSize: "19px" });

    patch(".hero_content", { gridTemplateColumns: "minmax(0,1fr)", padding: "44px 20px 150px", gap: "30px", textAlign: "center", justifyItems: "center" });
    patch(".hero_text", { display: "flex", flexDirection: "column", alignItems: "center" });
    patch(".hero_visual", { order: "-1", justifyItems: "center", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: "18px" });
    patch(".hero_wheel", { width: "116px", height: "116px", borderWidth: "9px", flex: "0 0 auto" });
    patch(".hero_wheel > div:nth-child(1)", { width: "76px", height: "8px" });
    patch(".hero_wheel > div:nth-child(2)", { width: "8px", height: "40px" });
    patch(".hero_wheel > div:nth-child(3)", { width: "34px", height: "34px", fontSize: "15px" });
    patch(".hero_buttons", { justifyContent: "center" });
    patch(".hero_stats", { gap: "22px 28px", marginTop: "34px", justifyContent: "center" });
    patch(".hero_sub", { fontSize: "17px" });
    patch(".hero_eyebrow", { fontSize: "10px", letterSpacing: ".12em", whiteSpace: "nowrap", marginBottom: "18px" });
    patch(".hero_layer_signs", { display: "none" });
    patch(".hero_signs_inline", { display: "flex", flexDirection: "column", gap: "10px", marginBottom: "0" });
    patch(".hero_lights", { display: "none" });

    patch(".section_courses, .section_why, .section_pricing, .section_reviews, .section_contact", { padding: "68px 20px", textAlign: "center" });
    patch(".section_head", { justifyContent: "center", alignItems: "center", textAlign: "center" });
    patch(".card_course, .card_price", { padding: "26px", alignItems: "center", textAlign: "center" });
    patch(".card_course .button_outline, .card_price .button_outline", { alignSelf: "center" });
    patch(".card_why", { padding: "24px", alignItems: "center", textAlign: "center" });
    patch(".card_course > div:first-child, .card_price span", { justifyContent: "center" });
    patch(".course_specs li", { justifyContent: "center", gap: "8px", flexWrap: "wrap" });
    patch(".course_specs", { width: "100%" });
    patch(".contact_inner", { gap: "32px", textAlign: "center", justifyItems: "center" });
    patch(".contact_info, .contact_list, .contact_list > div", { width: "100%", textAlign: "center", justifyItems: "center" });
    patch(".contact_map, .contact_map_frame", { width: "100%" });
    patch(".form_wrap", { padding: "26px", width: "100%", justifyItems: "center", textAlign: "center" });
    patch(".form_field", { width: "100%", textAlign: "center" });
    patch(".form_input, .form_select, .form_textarea", { textAlign: "center" });
    patch(".footer_brand, .footer_col", { textAlign: "center", justifyItems: "center" });
    patch(".footer_bottom", { justifyContent: "center", textAlign: "center" });
    patch(".footer_wrap", { padding: "56px 20px 28px" });
    patch(".footer_inner", { gap: "30px" });

    onScroll();
  }

  if (burger) burger.addEventListener("click", function () { menuOpen = !menuOpen; onResize(); });
  if (navMenu) navMenu.addEventListener("click", function (e) {
    if (e.target.closest("a") && menuOpen) { menuOpen = false; onResize(); }
  });

  /* ---- reviews carousel: auto + manual ---- */
  var track = q(".reviews_track"), dots = qa(".review_dot"), slide = 0, timer = null;
  var count = qa(".review_slide").length || 1;
  function render() {
    if (track) track.style.transform = "translateX(" + (-slide * 100) + "%)";
    dots.forEach(function (d, i) { d.style.background = i === slide ? "var(--yellow)" : "rgba(255,255,255,.45)"; });
  }
  function auto() { clearInterval(timer); timer = setInterval(function () { slide = (slide + 1) % count; render(); }, 6500); }
  dots.forEach(function (d, i) { d.addEventListener("click", function () { slide = i; render(); auto(); }); });
  qa("[data-rev]").forEach(function (b) {
    b.addEventListener("click", function () {
      slide = b.getAttribute("data-rev") === "next" ? (slide + 1) % count : (slide + count - 1) % count;
      render(); auto();
    });
  });
  render(); auto();

  /* ---- signup form (static hosting: no backend) ---- */
  var form = q(".form_wrap"), note = q(".form_note");
  if (form) form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (note) {
      note.textContent = "Prijava je zabeležena — zovemo vas u toku radnog vremena.";
      note.style.color = "var(--yellow)";
    }
    form.reset();
  });

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onResize, { passive: true });
  onResize();
})();
