import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'n-spinner',
  styleUrls: ['../../global/host.css', 'spinner.css'],
  shadow: true,
})
export class Spinner {
  /** Text announced by assistive technology. */
  @Prop() label = 'Carregando';

  /** Indicator size. */
  @Prop({ reflect: true }) size: 'sm' | 'default' | 'lg' = 'default';

  render() {
    return (
      <Host role="status" aria-label={this.label}>
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="9" />
          <path d="M21 12a9 9 0 0 0-9-9" />
        </svg>
      </Host>
    );
  }
}
