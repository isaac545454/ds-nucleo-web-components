import { Component, h, Host, Listen, Method, Prop, Watch } from '@stencil/core';

import { IconX } from '../../utils/icons';

@Component({
  tag: 'n-sheet',
  styleUrls: ['../../global/host.css', '../dialog/overlay.css', 'sheet.css'],
  shadow: true,
})
export class Sheet {
  @Prop({ mutable: true, reflect: true }) open = false;
  @Prop() side: 'top' | 'right' | 'bottom' | 'left' = 'right';

  private dialog?: HTMLDialogElement;
  private ready = false;

  componentDidLoad() {
    this.ready = true;
    this.apply();
  }

  @Watch('open')
  onOpen(next: boolean, previous: boolean) {
    if (!this.ready || next === previous) return;
    this.apply();
  }

  @Method()
  async showDialog() {
    this.open = true;
  }

  @Method()
  async hideDialog() {
    this.open = false;
  }

  @Listen('click')
  onHostClick(event: MouseEvent) {
    if (event.composedPath().some(node => node instanceof HTMLElement && node.hasAttribute('data-n-close'))) {
      this.open = false;
    }
  }

  private apply() {
    if (!this.dialog) return;
    if (this.open && !this.dialog.open) this.dialog.showModal();
    else if (!this.open && this.dialog.open) this.dialog.close();
  }

  private bindTrigger = (event: Event) => {
    const slot = event.target as HTMLSlotElement;
    if (slot.name !== 'trigger') return;
    slot.assignedElements().forEach(element => {
      element.addEventListener('click', click => {
        click.preventDefault();
        this.open = true;
      });
    });
  };

  render() {
    return (
      <Host>
        <slot name="trigger" onSlotchange={this.bindTrigger} />
        <dialog
          ref={element => (this.dialog = element)}
          onClick={event => {
            if (event.target === this.dialog) this.open = false;
          }}
          onClose={() => {
            this.open = false;
          }}
        >
          <div class={{ panel: true, [this.side]: true }} role="dialog" aria-modal="true">
            <button class="close" type="button" aria-label="Fechar" onClick={() => (this.open = false)}>
              <IconX />
            </button>
            <div class="header">
              <slot name="title" />
              <slot name="description" />
            </div>
            <slot />
            <div class="footer">
              <slot name="footer" />
            </div>
          </div>
        </dialog>
      </Host>
    );
  }
}
