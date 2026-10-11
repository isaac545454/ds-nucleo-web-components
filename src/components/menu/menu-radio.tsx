import { Component, Event, EventEmitter, h, Prop } from '@stencil/core';

import { IconCircle } from '../../utils/icons';

@Component({
  tag: 'n-menu-radio',
  styleUrls: ['../../global/host.css', 'menu.css'],
  shadow: { delegatesFocus: true },
})
export class MenuRadio {
  @Prop() value!: string;
  @Prop({ mutable: true, reflect: true }) checked = false;
  @Prop({ reflect: true }) disabled = false;

  @Event({ eventName: 'n-menu-radio' }) picked!: EventEmitter<string>;

  private choose = () => {
    if (this.disabled) return;
    this.picked.emit(this.value);
  };

  render() {
    return (
      <button class="item" type="button" role="menuitemradio" aria-checked={this.checked ? 'true' : 'false'} disabled={this.disabled} onClick={this.choose}>
        <span class="mark">{this.checked ? <IconCircle /> : null}</span>
        <slot />
      </button>
    );
  }
}
