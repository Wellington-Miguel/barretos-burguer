/**
 * ============================================================================
 * BARRETOS BURGUER ARTESANAL (@barretosburguerssa) — CONFIGURAÇÃO DE LINKS
 * ============================================================================
 * Edite apenas as URLs e textos abaixo para atualizar os destinos da página.
 * Todos os parâmetros de rastreamento do Instagram (utm_source, utm_medium,
 * utm_content, utm_campaign e fbclid) são repassados automaticamente!
 */

window.LINKS_CONFIG = {
  // 1. Botão 1 (Destaque Âmbar): Pedir com Descontos/Vantagens
  pecaAquiUrl: "https://barretosburguer.com.br/",

  // 2. Botão 2: Pedir no Ifood (Boca do Rio - Salvador/BA)
  ifoodUrl:
    "https://www.ifood.com.br/delivery/salvador-ba/barretos-burguer--pratos----boca-do-rio-boca-do-rio/99e044ec-d32e-4f8f-a7ea-ef8448960ed9?utm_medium=share",

  // 3. Botão 3: Pedir no 99 Food
  noveNoveFoodUrl: "https://oia.99app.com/dlp9/cTQRpX",

  // 4. Botão 4: Suporte para Pedidos (WhatsApp +55 71 9230-4657)
  whatsappSuporteUrl:
    "https://wa.me/557192304657?text=Ol%C3%A1%2C%20vim%20pelo%20Instagram%20e%20preciso%20de%20suporte%20com%20meu%20pedido%20na%20Barretos%20Burguer!",

  // 5. Botão 5: Avalie nossa hamburgueria (Google Avaliações)
  avaliacaoUrl: "https://g.page/r/CZkpPLPyYSX6EAE/review",

  // 6. Como chegar — Localização oficial no Google Maps
  mapsUrl: "https://share.google/URVBEgplSJEeGRKWm",

  // Textos rápidos de chamada, horários e rodapé (editáveis sem mexer no HTML)
  brand: {
    headline: "BATEU A FOME AÍ?",
    hoursTitle: "Horários e funcionamento",
    hoursValue: "Terça a domingo - 18h às 23h",
    directionsTitle: "Como chegar",
    directionsSubtext: "Ver rota no Google Maps",
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
