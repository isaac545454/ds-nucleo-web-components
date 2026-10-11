import { Component, h } from '@stencil/core';

@Component({ tag: 'n-card-title', styleUrls: ['../../global/host.css', 'card.css'], shadow: true })
export class CardTitle {
  render() {
    return <slot />;
  }
}
