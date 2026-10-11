import { Component, Element, h, Host, Listen, Prop } from '@stencil/core';

import { place } from '../../utils/position';

@Component({
  tag: 'n-dropdown',
  styleUrls: ['../../global/host.css', 'menu.css'],
  shadow: true,
})
export class Dropdown {
  @Element() host!: HTMLElement;

  @Prop() placement: 'top' | 'right' | 'bottom' | 'left' = 'bottom';
  @Prop({ mutable: true, reflect: true }) open = false;

  private panel?: HTMLDivElement;
  private anchor?: HTMLDivElement;

  componentDidRender() {
    if (this.open && this.anchor && this.panel) place(this.anchor, this.panel, this.placement, 4, 'start');
  }

  @Listen('n-menu-select')
  onSelect(event: CustomEvent<{ close?: boolean }>) {
    const target = event.target as Node | null;
    if (!target || !this.host.contains(target)) return;
    if (event.detail?.close !== false) this.open = false;
  }

  @Listen('click', { target: 'document' })
  onDocumentClick(event: MouseEvent) {
    if (!this.open) return;
    if (!event.composedPath().includes(this.host)) this.open = false;
  }

  @Listen('keydown')
  onKey(event: KeyboardEvent) {
    if (event.key === 'Escape') this.open = false;
  }

  private toggle = () => {
    this.open = !this.open;
  };

  render() {
    return (
      <Host>
        <div class="trigger" ref={element => (this.anchor = element)} onClick={this.toggle}>
          <slot name="trigger" />
        </div>
        <div ref={element => (this.panel = element)} class={{ panel: true, open: this.open }} role="menu">
          <slot />
        </div>
      </Host>
    );
  }
}
