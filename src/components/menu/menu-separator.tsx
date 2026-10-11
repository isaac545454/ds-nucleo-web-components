import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'n-menu-separator',
  styleUrls: ['../../global/host.css', 'menu.css'],
  shadow: true,
})
export class MenuSeparator {
  render() {
    return <Host role="separator" />;
  }
}
