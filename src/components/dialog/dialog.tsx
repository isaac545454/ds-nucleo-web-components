import { Component, Element, Event, EventEmitter, h, Host, Listen, Method, Prop, Watch } from '@stencil/core';

import { IconX } from '../../utils/icons';

@Component({
  tag: 'n-dialog',
  styleUrls: ['../../global/host.css', 'overlay.css', 'dialog.css'],
  shadow: true,
})
export class Dialog {
  @Element() host!: HTMLElement;

  /** Opens the dialog. */
  @Prop({ mutable: true, reflect: true }) open = false;

  @Event({ eventName: 'n-open' }) opened!: EventEmitter<void>;
  @Event({ eventName: 'n-close' }) closed!: EventEmitter<void>;

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
    const closer = event.composedPath().some(node => node instanceof HTMLElement && (node.hasAttribute('data-n-close') || node.getAttribute('slot') === 'close'));
    if (closer) this.requestClose();
  }

  private apply() {
    if (!this.dialog) return;
    if (this.open && !this.dialog.open) {
      this.dialog.showModal();
      this.opened.emit();
    } else if (!this.open && this.dialog.open) {
      this.dialog.close();
    }
  }

  private requestClose() {
    if (!this.open) return;
    this.open = false;
    this.closed.emit();
  }

  private onDialogClick = (event: MouseEvent) => {
    if (event.target === this.dialog) this.requestClose();
  };

  private onDialogClose = () => {
    this.requestClose();
  };

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
          onClick={this.onDialogClick}
          onClose={this.onDialogClose}
        >
          <div class="panel" role="dialog" aria-modal="true">
            <button class="close" type="button" aria-label="Fechar" onClick={() => this.requestClose()}>
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
