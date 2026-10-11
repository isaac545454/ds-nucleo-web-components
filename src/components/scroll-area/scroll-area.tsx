import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'n-scroll-area',
  styleUrls: ['../../global/host.css', 'scroll-area.css'],
  shadow: true,
})
export class ScrollArea {
  render() {
    return (
      <Host>
        <slot />
      </Host>
    );
  }
}
