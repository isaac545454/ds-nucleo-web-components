import { Component, h } from '@stencil/core';

@Component({ tag: 'n-card', styleUrls: ['../../global/host.css', 'card.css'], shadow: true })
export class Card {
  render() {
    return <slot />;
  }
}
