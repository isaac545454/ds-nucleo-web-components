import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'n-menu-label',
  styleUrls: ['../../global/host.css', 'menu.css'],
  shadow: true,
})
export class MenuLabel {
  @Prop() inset = false;

  render() {
    return (
      <Host>
        <slot />
      </Host>
    );
  }
}
