import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'n-option-group',
  styleUrls: ['../../global/host.css', 'select.css'],
  shadow: true,
})
export class OptionGroup {
  @Prop() label?: string;

  render() {
    return (
      <Host role="group">
        {this.label ? <div>{this.label}</div> : null}
        <slot />
      </Host>
    );
  }
}
