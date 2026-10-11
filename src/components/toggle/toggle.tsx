import { Component, Event, EventEmitter, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'n-toggle',
  styleUrls: ['../../global/host.css', 'toggle.css'],
  shadow: { delegatesFocus: true },
})
export class Toggle {
  @Prop() variant: 'default' | 'outline' = 'default';
  @Prop() size: 'default' | 'sm' | 'lg' = 'default';
  @Prop({ mutable: true, reflect: true }) pressed = false;
  @Prop({ reflect: true }) disabled = false;

  @Event({ eventName: 'n-change' }) nChange!: EventEmitter<boolean>;

  private toggle = () => {
    if (this.disabled) return;
    this.pressed = !this.pressed;
    this.nChange.emit(this.pressed);
  };

  render() {
    return (
      <Host>
        <button
          type="button"
          class={{ outline: this.variant === 'outline', [this.size]: this.size !== 'default' }}
          aria-pressed={this.pressed ? 'true' : 'false'}
          disabled={this.disabled}
          onClick={this.toggle}
        >
          <slot />
        </button>
      </Host>
    );
  }
}
