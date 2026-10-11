import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'n-skeleton',
  styleUrls: ['../../global/host.css', 'skeleton.css'],
  shadow: true,
})
export class Skeleton {
  render() {
    return (
      <Host aria-hidden="true">
        <slot />
      </Host>
    );
  }
}
