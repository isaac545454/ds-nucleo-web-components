# Nucleus

Design system agnóstico. Os componentes são custom elements compilados com [Stencil](https://stenciljs.com): o mesmo `<n-button>` funciona em HTML, React, Vue, Angular, Svelte ou qualquer outro ambiente.

Os tokens continuam os do tema zinc (light/dark) e atravessam o Shadow DOM via CSS variables.

## Instalação

```bash
npm install @isaac545454/nucleus
```

Registre os componentes uma vez e importe os tokens. As variáveis ficam no documento e atravessam o Shadow DOM:

```ts
import '@isaac545454/nucleus/styles.css';
import { defineCustomElements } from '@isaac545454/nucleus/loader';

defineCustomElements();
```

HTML sem bundler:

```html
<link rel="stylesheet" href="https://unpkg.com/@isaac545454/nucleus/dist/styles.css" />
<script type="module" src="https://unpkg.com/@isaac545454/nucleus/dist/nucleus/nucleus.esm.js"></script>
```

Para importar componente a componente (cada módulo se registra sozinho):

```ts
import '@isaac545454/nucleus/styles.css';
import '@isaac545454/nucleus/components/n-button.js';
import '@isaac545454/nucleus/components/n-input.js';
```

## Tema

Sobrescreva as variáveis em `:root`. A classe `dark` em qualquer ancestral troca o tema, porque as variáveis são herdadas pelo Shadow DOM.

```css
:root {
  --primary: 240 5.9% 10%;
  --radius: 0.5rem;
}
```

## Uso

```html
<n-dialog>
  <n-button slot="trigger">Entrar</n-button>
  <span slot="title">Acesso</span>
  <span slot="description">Use o e-mail da empresa.</span>
  <n-label for="email">E-mail</n-label>
  <n-input id="email" name="email" type="email" placeholder="voce@empresa.com"></n-input>
  <div slot="footer">
    <n-button data-n-close variant="outline">Cancelar</n-button>
    <n-button type="submit">Confirmar</n-button>
  </div>
</n-dialog>
```

Controles de formulário (`n-input`, `n-textarea`, `n-checkbox`, `n-switch`, `n-radio-group`, `n-select`, `n-slider` e `n-button`) participam do `<form>` nativo. `n-button type="submit"` envia o formulário ancestral.

Eventos sobem atravessando o Shadow DOM:

| Evento | Quando |
|---|---|
| `n-input` | valor muda enquanto o usuário edita |
| `n-change` | valor é confirmado |
| `n-open` / `n-close` | diálogo abre ou fecha |
| `n-confirm` / `n-cancel` | alerta confirma ou cancela |

React 19 escuta esses eventos no elemento. Em React 18, use `addEventListener` ou uma ref.

## Componentes

| Categoria | Tags |
|---|---|
| Overlays | `n-dialog`, `n-alert-dialog`, `n-sheet`, `n-popover`, `n-tooltip`, `n-dropdown` |
| Menu | `n-menu-item`, `n-menu-checkbox`, `n-menu-radio-group`, `n-menu-radio`, `n-menu-label`, `n-menu-separator`, `n-menu-sub` |
| Forms | `n-button`, `n-input`, `n-textarea`, `n-label`, `n-checkbox`, `n-radio-group`, `n-radio`, `n-switch`, `n-select`, `n-option`, `n-toggle`, `n-slider` |
| Layout | `n-card`, `n-tabs`, `n-accordion`, `n-separator`, `n-scroll-area`, `n-table` |
| Feedback | `n-alert`, `n-badge`, `n-avatar`, `n-progress`, `n-skeleton` |

`n-button` aceita `variant` (`default`, `destructive`, `outline`, `secondary`, `ghost`, `link`) e `size` (`default`, `sm`, `lg`, `icon`).

## Desenvolvimento

```bash
pnpm install
pnpm start          # galeria em http://localhost:3333
pnpm test
pnpm build          # dist/ + loader/
```
