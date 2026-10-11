import { Component, Event, EventEmitter, h, Prop } from '@stencil/core';

@Component({
  tag: 'n-menu-item',
  styleUrls: ['../../global/host.css', 'menu.css'],
  shadow: { delegatesFocus: true },
})
export class MenuItem {
  @Prop({ reflect: true }) disabled = false;
  @Prop() shortcut?: string;

  @Event({ eventName: 'n-menu-select' }) selected!: EventEmitter<{ close: boolean }>;

  private choose = () => {
    if (this.disabled) return;
    this.selected.emit({ close: true });
  };

  render() {
    return (
      <button class="item" type="button" role="menuitem" disabled={this.disabled} onClick={this.choose}>
        <slot />
        {this.shortcut ? <span class="shortcut">{this.shortcut}</span> : null}
      </button>
    );
  }
}
