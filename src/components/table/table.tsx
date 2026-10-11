import { Component, h } from '@stencil/core';

@Component({
  tag: 'n-table',
  styleUrls: ['../../global/host.css', 'table.css'],
  shadow: true,
})
export class Table {
  render() {
    return (
      <div class="wrap">
        <slot />
      </div>
    );
  }
}
