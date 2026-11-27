# 🍔 Barretos Burguer Artesanal — Link da Bio Oficial (`@barretosburguerssa`)

Página oficial de alta conversão (**Link-in-Bio**) da **Barretos Burguer Artesanal** (Salvador - BA), projetada com direção de arte **"Sertão Contemporâneo + Warm Glassmorphism"**, arquitetura estática ultra-rápida (zero dependências de build) e pronta para deploy imediato na **Vercel**.

---

## ✨ Destaques da Arquitetura

- **Conversão Mobile-First (`100dvh`):** Projetada especificamente para o navegador interno (WebView) do Instagram em iOS e Android, garantindo que a logo e os **3 CTAs principais (`Peça Aqui!`, `iFood`, `WhatsApp`)** fiquem 100% visíveis na primeira dobra (`390×844`) com área de toque ergonômica (`≥ 60px`).
- **Warm Glassmorphism + Identidade Nordestina:** Card em vidro fosco escuro quente (`backdrop-filter: blur(26px) saturate(170%)` + prefixo `-webkit-`), borda especular de `1px`, esferas luminosas 3D (**Sol do Sertão**), granulação orgânica sutil e marcas d'água vetoriais em estilo xilogravura/cordel.
- **Repasse Automático de UTMs & `fbclid`:** Captura automaticamente parâmetros `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term` e `fbclid` vindos da Bio ou de anúncios do Instagram e os anexa aos links de saída para rastreamento de vendas.
- **Autonomia Total (Zero Caminhos Externos):** Todos os ícones vetoriais, logo em alta definição (WebP + PNG Retina), favicons, banner OpenGraph (`1200×630`) e miniaturas reais do acervo estão versionados localmente em `assets/`.

---

## ⚡ Como Editar os Links de Destino (em 10 segundos)

Abra o arquivo [`config.js`](./config.js) na raiz do projeto e atualize as URLs reais:

```js
window.LINKS_CONFIG = {
  // 1. Pedir com Descontos/Vantagens (Cardápio Digital)
  pecaAquiUrl: "https://barretosburguer.com.br/",

  // 2. Pedir no Ifood
  ifoodUrl: "https://www.ifood.com.br/delivery/salvador-ba/barretos-burguer--pratos----boca-do-rio-boca-do-rio/99e044ec-d32e-4f8f-a7ea-ef8448960ed9?utm_medium=share",

  // 3. Pedir no 99 Food
  noveNoveFoodUrl: "https://oia.99app.com/dlp9/cTQRpX",

  // 4. Suporte para Pedidos (WhatsApp +55 71 9230-4657)
  whatsappSuporteUrl: "https://wa.me/557192304657?text=...",

  // 5. Avalie nossa hamburgueria (Google Review)
  avaliacaoUrl: "https://g.page/r/CZkpPLPyYSX6EAE/review",

  // 6. Como chegar (Google Maps)
  mapsUrl: "https://share.google/URVBEgplSJEeGRKWm",
  // ...
};
```

> **Fonte Customizada `Rockstone` (Opcional):** O CSS já inclui `@font-face` apontando para `assets/fonts/Rockstone.woff2` e utiliza `'Rubik Dirt'` (Google Fonts) como fallback rústico imediato. Caso possua o arquivo `.woff2` da fonte *Rockstone*, basta colocá-lo em `assets/fonts/Rockstone.woff2`.

---

## 📁 Estrutura de Pastas

```text
barretos-burguer/
├── index.html                  # Página principal semântica + SEO / OpenGraph
├── config.js                   # Configuração centralizada dos links e textos
├── vercel.json                 # Headers de cache imutável e segurança na Vercel
├── css/
│   ├── tokens.css              # Design Tokens (cores, vidros, tipografia, sombras)
│   └── styles.css              # Layout, Orbs 3D, Glassmorphism e responsividade
├── js/
│   └── main.js                 # Aplicação dos links e repasse automático de UTMs
└── assets/
    ├── brand/                  # Logo HD (WebP/PNG), OpenGraph 1200x630 e Favicons
    ├── icons/                  # Ícones SVG oficiais (Carrinho, iFood, WhatsApp, IG)
    ├── gallery/                # Miniaturas 1:1 otimizadas (WebP/JPG) do Instagram
    └── fonts/                  # Pasta preparada para Rockstone.woff2
```

---

## 🚀 Como Rodar Localmente

Como o projeto utiliza HTML5/CSS3/JS puros sem etapa pesada de build, qualquer servidor estático funciona imediatamente:

```bash
# Opção 1 — Python 3
python -m http.server 3000

# Opção 2 — Node.js (npx)
npx serve . -l 3000
```

Acesse `http://localhost:3000` no navegador.

---

## 🌐 Como Publicar no GitHub + Vercel

1. Inicialize o repositório Git (caso ainda não esteja inicializado) e envie para o GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: página oficial Link-in-Bio Barretos Burguer"
   git branch -M main
   git remote add origin https://github.com/SEU-USUARIO/barretos-burguer.git
   git push -u origin main
   ```
2. Acesse [vercel.com/new](https://vercel.com/new) e importe o repositório `barretos-burguer`.
3. Mantenha **Framework Preset** como `Other` (Zero-Config) e clique em **Deploy**.
4. Copie a URL gerada (ou conecte seu domínio personalizado) e adicione no campo **Site / Link da Bio** do perfil `@barretosburguerssa`!
