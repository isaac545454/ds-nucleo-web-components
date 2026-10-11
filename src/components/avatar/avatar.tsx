import { Component, h, Host, Prop, State, Watch } from '@stencil/core';

@Component({
  tag: 'n-avatar',
  styleUrls: ['../../global/host.css', 'avatar.css'],
  shadow: true,
})
export class Avatar {
  @Prop() src?: string;
  @Prop() alt = '';
  @Prop() fallback?: string;

  @State() failed = false;

  @Watch('src')
  onSrc() {
    this.failed = false;
  }

  render() {
    const showImage = Boolean(this.src) && !this.failed;
    return (
      <Host>
        {showImage ? (
          <img part="image" src={this.src} alt={this.alt} onError={() => (this.failed = true)} />
        ) : (
          <span class="fallback" part="fallback">
            <slot>{this.fallback}</slot>
          </span>
        )}
      </Host>
    );
  }
}
