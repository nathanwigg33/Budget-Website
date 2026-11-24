// Shared header, footer and product cards for every page.
(function () {
  var BRAND = "budget website";
  var NAV = [
    { href: "/", label: "Home" },
    { href: "/sheets", label: "Budget Sheets" },
    { href: "/app", label: "App" },
    { href: "/about", label: "About" },
    { href: "/support", label: "Support" },
  ];

  var path = location.pathname.replace(/\.html$/, "").replace(/\/index$/, "/");
  if (path.length > 1) path = path.replace(/\/$/, "");

  function isActive(href) {
    if (href === "/") return path === "/" || path === "";
    return path === href || path.indexOf(href + "/") === 0;
  }

  function logo() {
    return (
      '<a class="brand" href="/" aria-label="' + BRAND + ' home">' +
      '<span class="brand-mark" aria-hidden="true"><svg viewBox="0 0 32 32"><rect x="3" y="17" width="6" height="11" rx="2"/><rect x="13" y="11" width="6" height="17" rx="2"/><rect x="23" y="4" width="6" height="24" rx="2"/></svg></span>' +
      '<span class="brand-name">' + BRAND + "</span></a>"
    );
  }

  var header = document.getElementById("site-header");
  if (header) {
    header.className = "site-header";
    header.innerHTML =
      '<div class="container header-inner">' + logo() +
      '<button class="nav-toggle" aria-expanded="false" aria-controls="site-nav"><span></span><span></span><span></span><span class="sr-only">Menu</span></button>' +
      '<nav id="site-nav" class="site-nav" aria-label="Main">' +
      NAV.map(function (n) {
        return '<a href="' + n.href + '"' + (isActive(n.href) ? ' aria-current="page"' : "") + ">" + n.label + "</a>";
      }).join("") +
      '<a class="btn btn-small" href="/sheets">Shop sheets</a></nav></div>';

    var toggle = header.querySelector(".nav-toggle");
    toggle.addEventListener("click", function () {
      var open = header.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  var footer = document.getElementById("site-footer");
  if (footer) {
    footer.className = "site-footer";
    footer.innerHTML =
      '<div class="container footer-grid">' +
      '<div class="footer-brand">' + logo() +
      "<p>Simple budgeting tools to help you understand your money and build better habits.</p></div>" +
      '<div><h4>Shop</h4><a href="/sheets">Budget sheets</a><a href="/sheets/bundle">Everything Bundle</a><a href="/app">Budget app</a></div>' +
      '<div><h4>Help</h4><a href="/support">Support &amp; FAQ</a><a href="/support#contact">Contact</a><a href="/about">About</a></div>' +
      '<div><h4>Legal</h4><a href="/privacy">Privacy Policy</a><a href="/terms">Terms &amp; License</a><a href="/refunds">Refund Policy</a></div>' +
      '</div><div class="container footer-bottom"><span>&copy; ' + new Date().getFullYear() + " " + BRAND + '</span><span>Made for people who want money to feel simple.</span></div>';
  }

  // Product cards: <div data-product-cards></div> renders all four.
  var P = window.PRODUCTS || {};
  function price(p) {
    return '<span class="price">$' + p.price + "</span>" + (p.compareAt ? ' <s class="compare">$' + p.compareAt + "</s>" : "");
  }
  function buyButton(p, extraClass) {
    if (p.checkout) {
      return '<a class="btn ' + (extraClass || "") + '" href="' + p.checkout + '">Buy now &middot; $' + p.price + "</a>";
    }
    return '<button class="btn ' + (extraClass || "") + '" disabled title="Checkout is being set up">Coming soon</button>';
  }

  document.querySelectorAll("[data-product-cards]").forEach(function (el) {
    el.innerHTML = Object.keys(P).map(function (id) {
      var p = P[id];
      return (
        '<article class="product-card theme-' + p.color + (p.popular ? " is-popular" : "") + '">' +
        (p.popular ? '<span class="ribbon">Most popular</span>' : "") +
        '<div class="sheet-thumb" aria-hidden="true"><i></i><i></i><i></i><i></i><b></b></div>' +
        '<span class="eyebrow">' + p.tier + "</span>" +
        "<h3>" + p.name + "</h3>" +
        '<p class="muted">' + p.tagline + "</p>" +
        '<div class="price-row">' + price(p) + "</div>" +
        '<ul class="checks">' + p.features.slice(0, 4).map(function (f) { return "<li>" + f + "</li>"; }).join("") + "</ul>" +
        '<a class="btn btn-ghost" href="/sheets/' + id + '">See details</a>' +
        "</article>"
      );
    }).join("");
  });

  // Product page: <main data-product="starter">
  var page = document.querySelector("[data-product]");
  if (page && P[page.dataset.product]) {
    var p = P[page.dataset.product];
    document.title = p.name + " | " + BRAND;
    page.querySelectorAll("[data-field]").forEach(function (el) {
      var f = el.dataset.field;
      if (f === "price") el.innerHTML = price(p);
      else if (f === "features") el.innerHTML = p.features.map(function (x) { return "<li>" + x + "</li>"; }).join("");
      else if (f === "buy") el.innerHTML = buyButton(p, "btn-large");
      else if (p[f] != null) el.textContent = p[f];
    });
    page.querySelectorAll("[data-theme-target]").forEach(function (el) { el.classList.add("theme-" + p.color); });
  }

  // Email signup: no email service connected yet.
  document.querySelectorAll("form[data-signup]").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      form.innerHTML = '<p class="form-note">Thanks! Email signup is coming soon, so nothing was saved yet.</p>';
    });
  });
})();
