import { Component, Event, EventEmitter, h, Host, Method, Prop, Watch } from '@stencil/core';

@Component({
  tag: 'n-alert-dialog',
  styleUrls: ['../../global/host.css', '../dialog/overlay.css', 'alert-dialog.css'],
  shadow: true,
})
export class AlertDialog {
  @Prop({ mutable: true, reflect: true }) open = false;

  @Event({ eventName: 'n-confirm' }) confirmed!: EventEmitter<void>;
  @Event({ eventName: 'n-cancel' }) cancelled!: EventEmitter<void>;
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

  private apply() {
    if (!this.dialog) return;
    if (this.open && !this.dialog.open) this.dialog.showModal();
    else if (!this.open && this.dialog.open) this.dialog.close();
  }

  private bindSlot = (event: Event) => {
    const slot = event.target as HTMLSlotElement;
    slot.assignedElements().forEach(element => {
      if (slot.name === 'trigger') {
        element.addEventListener('click', click => {
          click.preventDefault();
          this.open = true;
        });
      }
      if (slot.name === 'cancel') {
        element.addEventListener('click', () => {
          if (!this.open) return;
          this.cancelled.emit();
          this.closed.emit();
          this.open = false;
        });
      }
      if (slot.name === 'action') {
        element.addEventListener('click', () => {
          if (!this.open) return;
          this.confirmed.emit();
          this.closed.emit();
          this.open = false;
        });
      }
    });
  };

  render() {
    return (
      <Host>
        <slot name="trigger" onSlotchange={this.bindSlot} />
        <dialog
          ref={element => (this.dialog = element)}
          role="alertdialog"
          onClose={() => {
            if (!this.open) return;
            this.open = false;
            this.cancelled.emit();
            this.closed.emit();
          }}
        >
          <div class="panel">
            <div class="header">
              <slot name="title" />
              <slot name="description" />
            </div>
            <slot />
            <div class="actions">
              <slot name="cancel" onSlotchange={this.bindSlot} />
              <slot name="action" onSlotchange={this.bindSlot} />
            </div>
          </div>
        </dialog>
      </Host>
    );
  }
}
