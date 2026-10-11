import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

const meta = {
  title: 'Forms/Form',
  tags: ['autodocs'],
  render: () => html`
    <form
      class="stack"
      @submit=${(event: Event) => {
        event.preventDefault();
        const data = new FormData(event.target as HTMLFormElement);
        const output = (event.target as HTMLFormElement).querySelector('output');
        if (output) output.textContent = JSON.stringify(Object.fromEntries(data.entries()));
      }}
    >
      <div class="field">
        <n-label for="form-nome">Nome</n-label>
        <n-input id="form-nome" name="nome" required placeholder="Ada Lovelace"></n-input>
      </div>
      <div class="field">
        <n-label for="form-nota">Nota</n-label>
        <n-textarea id="form-nota" name="nota" rows="3" placeholder="Opcional"></n-textarea>
      </div>
      <div class="field">
        <n-label for="form-plano">Plano</n-label>
        <n-select id="form-plano" name="plano" required>
          <n-option value="pro">Pro</n-option>
          <n-option value="time">Time</n-option>
        </n-select>
      </div>
      <div class="row">
        <n-checkbox id="form-termos" name="termos" required></n-checkbox>
        <n-label for="form-termos">Aceito os termos</n-label>
      </div>
      <div class="row">
        <n-button type="submit">Enviar</n-button>
        <n-button type="reset" variant="outline">Limpar</n-button>
      </div>
      <output></output>
    </form>
  `,
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {};
