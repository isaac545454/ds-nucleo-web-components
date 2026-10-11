import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'n-separator',
  styleUrls: ['../../global/host.css', 'separator.css'],
  shadow: true,
})
export class Separator {
  @Prop({ reflect: true }) orientation: 'horizontal' | 'vertical' = 'horizontal';
  @Prop() decorative = true;

  render() {
    return <Host role={this.decorative ? 'none' : 'separator'} aria-orientation={this.decorative ? undefined : this.orientation} />;
  }
}
