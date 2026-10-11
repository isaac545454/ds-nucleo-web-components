import { Component, Element, h, Host, Listen, Prop } from '@stencil/core';

import { place, Placement } from '../../utils/position';

@Component({
  tag: 'n-popover',
  styleUrls: ['../../global/host.css', 'popover.css'],
  shadow: true,
})
export class Popover {
  @Element() host!: HTMLElement;

  @Prop() placement: Placement = 'bottom';
  @Prop({ mutable: true, reflect: true }) open = false;

  private panel?: HTMLDivElement;
  private anchor?: HTMLDivElement;

  componentDidRender() {
    if (this.open && this.anchor && this.panel) place(this.anchor, this.panel, this.placement, 6, 'center');
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

  render() {
    return (
      <Host>
        <div class="trigger" ref={element => (this.anchor = element)} onClick={() => (this.open = !this.open)}>
          <slot name="trigger" />
        </div>
        <div ref={element => (this.panel = element)} class={{ panel: true, open: this.open }}>
          <slot />
        </div>
      </Host>
    );
  }
}
