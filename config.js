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
  pecaAquiUrl: "https://pedir.site/barretosburguer",

  // 2. Botão iFood: Link oficial da loja no iFood (Salvador - BA)
  ifoodUrl: "https://www.ifood.com.br/delivery/salvador-ba/barretos-burguer",

  // 3. Botão WhatsApp: Link direto com mensagem inicial opcional
  // Dica: substitua 5571999999999 pelo número oficial com DDD 71 (apenas dígitos)
  whatsappUrl:
    "https://wa.me/5571999999999?text=Ol%C3%A1%2C%20vim%20pelo%20Instagram%20da%20Barretos%20Burguer%20e%20quero%20fazer%20um%20pedido!",

  // 4. Perfil Oficial no Instagram
  instagramUrl: "https://www.instagram.com/barretosburguerssa/",

  // 5. Localização oficial no Google Maps (Badge superior clicável)
  mapsUrl: "https://share.google/URVBEgplSJEeGRKWm",

  // Textos rápidos de status e chamada (editáveis sem mexer no HTML)
  brand: {
    statusBadge: "Delivery em Salvador • Burguer Artesanal",
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
