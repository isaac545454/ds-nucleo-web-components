import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'n-badge',
  styleUrls: ['../../global/host.css', 'badge.css'],
  shadow: true,
})
export class Badge {
  @Prop() variant: 'default' | 'secondary' | 'destructive' | 'outline' = 'default';

  render() {
    return (
      <Host>
        <span class={{ [this.variant]: this.variant !== 'default' }}>
          <slot />
        </span>
      </Host>
    );
  }
}
