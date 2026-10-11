import { Component, h } from '@stencil/core';

@Component({ tag: 'n-card-content', styleUrls: ['../../global/host.css', 'card.css'], shadow: true })
export class CardContent {
  render() {
    return <slot />;
  }
}
