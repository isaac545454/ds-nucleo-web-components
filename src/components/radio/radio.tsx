import { Component, Event, EventEmitter, h, Host, Listen, Prop } from '@stencil/core';

@Component({
  tag: 'n-radio',
  styleUrls: ['../../global/host.css', 'radio.css'],
  shadow: { delegatesFocus: true },
})
export class Radio {
  @Prop() value!: string;
  @Prop({ mutable: true, reflect: true }) checked = false;
  @Prop({ mutable: true, reflect: true }) disabled = false;
  @Prop({ mutable: true }) groupDisabled = false;

  @Event({ eventName: 'n-radio-select' }) selected!: EventEmitter<string>;

  @Listen('click')
  protected choose() {
    if (this.disabled || this.groupDisabled) return;
    this.selected.emit(this.value);
  }

  render() {
    return (
      <Host>
        <button type="button" role="radio" aria-checked={this.checked ? 'true' : 'false'} disabled={this.disabled || this.groupDisabled}>
          <span class="dot" />
        </button>
        <slot />
      </Host>
    );
  }
}
