import { Component, h } from '@stencil/core';

@Component({ tag: 'n-card-description', styleUrls: ['../../global/host.css', 'card.css'], shadow: true })
export class CardDescription {
  render() {
    return <slot />;
  }
}
