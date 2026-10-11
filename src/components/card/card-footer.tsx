import { Component, h } from '@stencil/core';

@Component({ tag: 'n-card-footer', styleUrls: ['../../global/host.css', 'card.css'], shadow: true })
export class CardFooter {
  render() {
    return <slot />;
  }
}
