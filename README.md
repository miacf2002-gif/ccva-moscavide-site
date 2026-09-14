# CCVA Moscavide — site

Projeto React + Vite baseado no design do Figma Make da CCVA Moscavide.

## O que foi corrigido
- `lang="pt-PT"` e título/descrição reais no HTML.
- SEO básico e indexação ativada.
- Morada alinhada com a informação pública do CCVA Moscavide.
- Removidos eventos e pedidos de oração fictícios.
- Os formulários não fingem guardar dados: abrem um email preparado no programa de email do visitante.
- Layout e menu continuam responsivos.

## Como abrir no computador
É necessário ter Node.js instalado.

```bash
npm install
npm run dev
```

Depois abre o endereço mostrado pelo Vite (normalmente `http://localhost:5173`).

## Criar a versão para publicar

```bash
npm run build
```

A pasta `dist/` é a versão pronta para alojamento.

## Alojamento recomendado para orçamento baixo
Para este site, não é necessário pagar um servidor tradicional. Cloudflare Pages suporta React/Vite e pode publicar a pasta `dist/`. A configuração típica é:

- Build command: `npm run build`
- Build directory: `dist`

Também podemos ligar um domínio próprio quando tiverem um.

## Nota sobre formulários
Nesta versão, os formulários usam `mailto:` para não obrigar a pagar um backend. Se quiserem que os pedidos cheguem mesmo a uma caixa de correio sem depender do programa de email do visitante, a próxima etapa é ligar um pequeno backend/form service.

## Importante
Confirma com a equipa da igreja o email `geral@ccvamoscavide.pt`, horários, IBAN, MB WAY, morada e redes sociais antes da publicação final.
