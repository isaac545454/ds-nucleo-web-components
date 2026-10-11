import { Component, Element, h, Host, Prop, State } from '@stencil/core';

import { place, Placement } from '../../utils/position';

@Component({
  tag: 'n-tooltip',
  styleUrls: ['../../global/host.css', '../popover/popover.css'],
  shadow: true,
})
export class Tooltip {
  @Element() host!: HTMLElement;

  /** Text shown on hover or focus. A default slot overrides this. */
  @Prop() text = '';
  @Prop() placement: Placement = 'top';

  @State() open = false;

  private anchor?: HTMLDivElement;
  private panel?: HTMLDivElement;

  componentDidRender() {
    if (this.open && this.anchor && this.panel) place(this.anchor, this.panel, this.placement, 6, 'center');
  }

  private show = () => {
    this.open = true;
  };

  private hide = () => {
    this.open = false;
  };

  render() {
    return (
      <Host onMouseEnter={this.show} onMouseLeave={this.hide} onFocusin={this.show} onFocusout={this.hide}>
        <div class="trigger" ref={element => (this.anchor = element)}>
          <slot name="trigger" />
        </div>
        <div ref={element => (this.panel = element)} class={{ panel: true, open: this.open }} role="tooltip">
          <slot>{this.text}</slot>
        </div>
      </Host>
    );
  }
}
