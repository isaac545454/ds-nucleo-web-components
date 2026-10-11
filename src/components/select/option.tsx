import { Component, Event, EventEmitter, h, Host, Prop } from '@stencil/core';

import { IconCheck } from '../../utils/icons';

@Component({
  tag: 'n-option',
  styleUrls: ['../../global/host.css', 'select.css'],
  shadow: true,
})
export class Option {
  @Prop() value!: string;
  @Prop({ mutable: true, reflect: true }) selected = false;
  @Prop({ reflect: true }) disabled = false;
  @Prop({ mutable: true, reflect: true }) active = false;

  @Event({ eventName: 'n-option-select' }) picked!: EventEmitter<string>;

  private choose = () => {
    if (this.disabled) return;
    this.picked.emit(this.value);
  };

  render() {
    return (
      <Host role="option" aria-selected={this.selected ? 'true' : 'false'} onClick={this.choose}>
        <span>
          <slot />
        </span>
        <span class="mark">
          <IconCheck />
        </span>
      </Host>
    );
  }
}
