# Fonte Customizada `Rockstone`

O projeto já está preparado para a fonte display oficial **Rockstone** utilizando `'Rubik Dirt'` (Google Fonts) como fallback imediato de estética rústica/xilogravura — garantindo **zero erros `404`** no console mesmo antes do arquivo `.woff2` ser adicionado.

Para ativar o arquivo local `Rockstone.woff2`:
1. Coloque o arquivo `Rockstone.woff2` nesta pasta (`assets/fonts/Rockstone.woff2`).
2. No arquivo `config.js`, defina:
   ```js
   customRockstoneFont: "assets/fonts/Rockstone.woff2"
   ```
   *(Ou descomente a linha `url('../assets/fonts/Rockstone.woff2')` em `css/tokens.css`).*
