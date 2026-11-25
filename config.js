/**
 * ============================================================================
 * BARRETOS BURGUER ARTESANAL (@barretosburguerssa) — CONFIGURAÇÃO DE LINKS
 * ============================================================================
 * Edite apenas as URLs abaixo para atualizar os destinos dos botões da Bio.
 * Todos os parâmetros de rastreamento do Instagram (utm_source, utm_medium,
 * utm_content, utm_campaign e fbclid) são repassados automaticamente!
 */

window.LINKS_CONFIG = {
  // 1. Botão Principal (Destaque Âmbar): Cardápio Digital / Delivery Direto
  pecaAquiUrl: "https://barretosburguer.com.br/",

  // 2. Botão Ifood: Link oficial da loja no iFood (Boca do Rio - Salvador/BA)
  ifoodUrl:
    "https://www.ifood.com.br/delivery/salvador-ba/barretos-burguer--pratos----boca-do-rio-boca-do-rio/99e044ec-d32e-4f8f-a7ea-ef8448960ed9?utm_medium=share",

  // 3. Botão 99 Food: Link oficial da loja na 99Food
  noveNoveFoodUrl: "https://oia.99app.com/dlp9/cTQRpX",

  // 4. WhatsApp — Vendas & Pedidos (+55 71 9272-5604)
  whatsappPedidosUrl:
    "https://wa.me/557192725604?text=Ol%C3%A1%2C%20vim%20pelo%20Instagram%20da%20Barretos%20Burguer%20e%20quero%20fazer%20um%20pedido!",

  // 5. WhatsApp — Suporte dos Pedidos (+55 71 9230-4657)
  whatsappSuporteUrl:
    "https://wa.me/557192304657?text=Ol%C3%A1%2C%20vim%20pelo%20Instagram%20e%20preciso%20de%20suporte%20com%20meu%20pedido%20na%20Barretos%20Burguer!",

  // 6. Perfil Oficial no Instagram
  instagramUrl: "https://www.instagram.com/barretosburguerssa/",

  // 7. Localização oficial no Google Maps (Badge superior clicável)
  mapsUrl: "https://share.google/URVBEgplSJEeGRKWm",

  // Textos rápidos de status e chamada (editáveis sem mexer no HTML)
  brand: {
    statusBadge: "Nossa localização • Burguer Artesanal",
    headline: "BATEU A FOME AÍ?",
    instagramHandle: "@barretosburguerssa",
    locationFooter: "Salvador • Bahia",
    // Preencha com "assets/fonts/Rockstone.woff2" caso adicione o arquivo da fonte local:
    customRockstoneFont: ""
  },

  // Configuração de repasse automático de parâmetros de tráfego (Instagram Ads / Bio)
  tracking: {
    forwardParams: [
      "utm_source",
      "utm_medium",
      "utm_campaign",
      "utm_content",
      "utm_term",
      "fbclid",
      "gclid"
    ],
    // Caso o visitante acesse direto sem UTMs, adiciona origem padrão nos links de pedido:
    defaultParams: {
      utm_source: "instagram",
      utm_medium: "social",
      utm_content: "link_in_bio"
    }
  }
};
