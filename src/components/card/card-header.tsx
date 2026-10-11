import { Component, h } from '@stencil/core';

@Component({ tag: 'n-card-header', styleUrls: ['../../global/host.css', 'card.css'], shadow: true })
export class CardHeader {
  render() {
    return <slot />;
  }
}
