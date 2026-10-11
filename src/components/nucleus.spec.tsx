import { newSpecPage } from '@stencil/core/testing';

import { Button } from './button/button';
import { Badge } from './badge/badge';
import { Spinner } from './spinner/spinner';
import { Checkbox } from './checkbox/checkbox';
import { Input } from './input/input';
import { Tab } from './tabs/tab';
import { TabList } from './tabs/tab-list';
import { TabPanel } from './tabs/tab-panel';
import { Tabs } from './tabs/tabs';

describe('nucleus', () => {
  it('renders a button variant and forwards the label', async () => {
    const page = await newSpecPage({
      components: [Button],
      html: `<n-button variant="outline">Salvar</n-button>`,
    });
    const button = page.root?.shadowRoot?.querySelector('button');
    expect(page.root?.textContent).toBe('Salvar');
    expect(button?.classList.contains('outline')).toBe(true);
  });

  it('keeps an input value in the form internals', async () => {
    const page = await newSpecPage({
      components: [Input],
      html: `<n-input value="ada@empresa.com"></n-input>`,
    });
    const input = page.rootInstance as Input;
    expect(input.value).toBe('ada@empresa.com');
    expect(page.root?.shadowRoot?.querySelector('input')?.value).toBe('ada@empresa.com');
  });

  it('toggles a checkbox and emits n-change', async () => {
    const page = await newSpecPage({
      components: [Checkbox],
      html: `<n-checkbox></n-checkbox>`,
    });
    const calls: boolean[] = [];
    page.root?.addEventListener('n-change', (event: Event) => {
      calls.push((event as CustomEvent<boolean>).detail);
    });
    page.root?.click();
    await page.waitForChanges();
    expect(page.root?.hasAttribute('checked')).toBe(true);
    expect(calls).toEqual([true]);
  });

  it('renders a spinner with an accessible label', async () => {
    const page = await newSpecPage({
      components: [Spinner],
      html: `<n-spinner label="Salvando" size="sm"></n-spinner>`,
    });
    expect(page.root?.getAttribute('role')).toBe('status');
    expect(page.root?.getAttribute('aria-label')).toBe('Salvando');
    expect(page.root?.getAttribute('size')).toBe('sm');
    expect(page.root?.shadowRoot?.querySelector('svg')).not.toBeNull();
  });

  it('renders a badge', async () => {
    const page = await newSpecPage({
      components: [Badge],
      html: `<n-badge variant="secondary">Novo</n-badge>`,
    });
    expect(page.root?.textContent).toContain('Novo');
  });

  it('activates the matching tab panel', async () => {
    const page = await newSpecPage({
      components: [Tabs, TabList, Tab, TabPanel],
      html: `
        <n-tabs value="conta">
          <n-tab-list>
            <n-tab value="conta">Conta</n-tab>
            <n-tab value="senha">Senha</n-tab>
          </n-tab-list>
          <n-tab-panel value="conta">Painel da conta</n-tab-panel>
          <n-tab-panel value="senha">Painel da senha</n-tab-panel>
        </n-tabs>
      `,
    });
    const panels = page.root?.querySelectorAll('n-tab-panel');
    expect(panels?.[0].hasAttribute('active')).toBe(true);
    expect(panels?.[1].hasAttribute('active')).toBe(false);

    page.root?.querySelector('n-tab[value="senha"]')?.shadowRoot?.querySelector('button')?.click();
    await page.waitForChanges();
    expect(panels?.[0].hasAttribute('active')).toBe(false);
    expect(panels?.[1].hasAttribute('active')).toBe(true);
  });
});
