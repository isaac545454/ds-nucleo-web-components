import { Component, Event, EventEmitter, h, Prop } from '@stencil/core';

import { IconCheck } from '../../utils/icons';

@Component({
  tag: 'n-menu-checkbox',
  styleUrls: ['../../global/host.css', 'menu.css'],
  shadow: { delegatesFocus: true },
})
export class MenuCheckbox {
  @Prop({ mutable: true, reflect: true }) checked = false;
  @Prop({ reflect: true }) disabled = false;

  @Event({ eventName: 'n-change' }) nChange!: EventEmitter<boolean>;
  @Event({ eventName: 'n-menu-select' }) selected!: EventEmitter<{ close: boolean }>;

  private toggle = () => {
    if (this.disabled) return;
    this.checked = !this.checked;
    this.nChange.emit(this.checked);
    this.selected.emit({ close: false });
  };

  render() {
    return (
      <button class="item" type="button" role="menuitemcheckbox" aria-checked={this.checked ? 'true' : 'false'} disabled={this.disabled} onClick={this.toggle}>
        <span class="mark">{this.checked ? <IconCheck /> : null}</span>
        <slot />
      </button>
    );
  }
}
