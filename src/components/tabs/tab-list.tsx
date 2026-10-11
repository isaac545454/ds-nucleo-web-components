import { Component, h } from '@stencil/core';

@Component({
  tag: 'n-tab-list',
  styleUrls: ['../../global/host.css', 'tabs.css'],
  shadow: true,
})
export class TabList {
  render() {
    return (
      <div role="tablist">
        <slot />
      </div>
    );
  }
}
