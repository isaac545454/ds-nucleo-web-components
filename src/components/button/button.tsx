import { AttachInternals, Component, Event, EventEmitter, h, Host, Method, Prop } from '@stencil/core';

@Component({
  tag: 'n-button',
  styleUrls: ['../../global/host.css', 'button.css'],
  shadow: { delegatesFocus: true },
  formAssociated: true,
})
export class Button {
  @AttachInternals() internals!: ElementInternals;

  /** Visual style. */
  @Prop() variant: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link' = 'default';

  /** Control height and padding. */
  @Prop() size: 'default' | 'sm' | 'lg' | 'icon' = 'default';

  /** Disables the button. */
  @Prop({ reflect: true }) disabled = false;

  /** `submit` and `reset` act on the ancestor form. */
  @Prop() type: 'button' | 'submit' | 'reset' = 'button';

  @Prop() name?: string;
  @Prop() value?: string;

  @Event({ eventName: 'n-click' }) nClick!: EventEmitter<void>;

  private button?: HTMLButtonElement;

  @Method()
  async focusButton() {
    this.button?.focus();
  }

  private onClick = (event: MouseEvent) => {
    if (this.disabled) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    this.nClick.emit();
    if (this.type === 'submit') this.internals.form?.requestSubmit();
    if (this.type === 'reset') this.internals.form?.reset();
  };

  render() {
    return (
      <Host>
        <button
          ref={element => (this.button = element)}
          part="button"
          class={{
            [this.variant]: true,
            [this.size]: this.size !== 'default',
          }}
          type="button"
          name={this.name}
          value={this.value}
          disabled={this.disabled}
          onClick={this.onClick}
        >
          <slot />
        </button>
      </Host>
    );
  }
}
