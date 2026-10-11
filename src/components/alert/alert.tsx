import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'n-alert',
  styleUrls: ['../../global/host.css', 'alert.css'],
  shadow: true,
})
export class Alert {
  @Prop({ reflect: true }) variant: 'default' | 'destructive' = 'default';

  render() {
    return (
      <Host role="alert">
        <slot name="title" />
        <div>
          <slot />
        </div>
      </Host>
    );
  }
}
