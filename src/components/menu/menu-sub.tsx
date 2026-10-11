import { Component, Element, h, Host, Prop, State } from '@stencil/core';

import { IconChevronRight } from '../../utils/icons';
import { place } from '../../utils/position';

@Component({
  tag: 'n-menu-sub',
  styleUrls: ['../../global/host.css', 'menu.css'],
  shadow: true,
})
export class MenuSub {
  @Element() host!: HTMLElement;

  @Prop() label = '';

  @State() open = false;

  private anchor?: HTMLButtonElement;
  private panel?: HTMLDivElement;

  componentDidRender() {
    if (this.open && this.anchor && this.panel) place(this.anchor, this.panel, 'right', 4, 'start');
  }

  render() {
    return (
      <Host onMouseEnter={() => (this.open = true)} onMouseLeave={() => (this.open = false)}>
        <button
          ref={element => (this.anchor = element)}
          class="item sub-trigger"
          type="button"
          aria-expanded={this.open ? 'true' : 'false'}
          onClick={() => (this.open = !this.open)}
        >
          {this.label}
          <IconChevronRight />
        </button>
        <div ref={element => (this.panel = element)} class={{ panel: true, open: this.open }} role="menu">
          <slot />
        </div>
      </Host>
    );
  }
}
