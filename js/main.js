/**
 * ============================================================================
 * BARRETOS BURGUER — HIDRATAÇÃO DE LINKS & REPASSE AUTOMÁTICO DE UTMs / FBCLID
 * ============================================================================
 */

(function () {
  "use strict";

  const config = window.LINKS_CONFIG || {};
  const trackingConfig = config.tracking || {};
  const allowedParams = trackingConfig.forwardParams || [
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_content",
    "utm_term",
    "fbclid",
    "gclid"
  ];

  /**
   * Mescla os parâmetros de rastreamento da URL de entrada (ex: Instagram Bio/Ads)
   * na URL de destino sem sobrescrever parâmetros específicos já definidos no destino.
   */
  function buildTrackedUrl(baseUrl, options) {
    if (!baseUrl || typeof baseUrl !== "string") return "#";

    const opts = options || {};
    let targetUrl;

    try {
      targetUrl = new URL(baseUrl, window.location.origin);
    } catch (_) {
      return baseUrl;
    }

    const incomingParams = new URLSearchParams(window.location.search);
    let hasIncomingTracking = false;

    allowedParams.forEach(function (key) {
      const val = incomingParams.get(key);
      if (val) {
        hasIncomingTracking = true;
        if (!targetUrl.searchParams.has(key)) {
          targetUrl.searchParams.set(key, val);
        }
      }
    });

    if (!hasIncomingTracking && opts.applyDefaults && trackingConfig.defaultParams) {
      Object.entries(trackingConfig.defaultParams).forEach(function ([key, val]) {
        if (val && !targetUrl.searchParams.has(key)) {
          targetUrl.searchParams.set(key, val);
        }
      });
    }

    return targetUrl.toString();
  }

  function applyConfig() {
    // 1. Mapeia os botões e links configuráveis via atributo data-link-key
    const linkBindings = {
      pecaAqui: { url: config.pecaAquiUrl, forwardTracking: true, applyDefaults: true },
      ifood: { url: config.ifoodUrl, forwardTracking: true, applyDefaults: true },
      noveNoveFood: { url: config.noveNoveFoodUrl, forwardTracking: false, applyDefaults: false },
      whatsappSuporte: { url: config.whatsappSuporteUrl, forwardTracking: false, applyDefaults: false },
      avaliacao: { url: config.avaliacaoUrl, forwardTracking: false, applyDefaults: false },
      maps: { url: config.mapsUrl, forwardTracking: false, applyDefaults: false }
    };

    document.querySelectorAll("[data-link-key]").forEach(function (anchor) {
      const key = anchor.getAttribute("data-link-key");
      const binding = linkBindings[key];
      if (!binding || !binding.url) return;

      const finalHref = binding.forwardTracking
        ? buildTrackedUrl(binding.url, { applyDefaults: binding.applyDefaults })
        : binding.url;
      anchor.setAttribute("href", finalHref);
    });

    // 2. Hidrata textos opcionais de marca caso alterados no config.js
    if (config.brand) {
      const textMap = {
        "[data-brand-headline]": config.brand.headline,
        "[data-brand-hours-title]": config.brand.hoursTitle,
        "[data-brand-hours-value]": config.brand.hoursValue,
        "[data-brand-directions-title]": config.brand.directionsTitle,
        "[data-brand-directions-subtext]": config.brand.directionsSubtext,
        "[data-brand-location]": config.brand.locationFooter
      };

      Object.entries(textMap).forEach(function ([selector, value]) {
        if (!value) return;
        const el = document.querySelector(selector);
        if (el) el.textContent = value;
      });

      // Carrega Rockstone.woff2 sob demanda caso configurada em config.js (evita 404 enquanto opcional)
      if (config.brand.customRockstoneFont && "FontFace" in window) {
        const rockstone = new FontFace(
          "Rockstone",
          "url(" + config.brand.customRockstoneFont + ") format('woff2')",
          { weight: "400", style: "normal", display: "swap" }
        );
        rockstone
          .load()
          .then(function (loaded) {
            document.fonts.add(loaded);
          })
          .catch(function () {});
      }
    }

    // 3. Atualiza ano automático no rodapé
    const yearEl = document.getElementById("current-year");
    if (yearEl) {
      yearEl.textContent = String(new Date().getFullYear());
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", applyConfig);
  } else {
    applyConfig();
  }
})();
