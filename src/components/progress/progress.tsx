import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'n-progress',
  styleUrls: ['../../global/host.css', 'progress.css'],
  shadow: true,
})
export class Progress {
  @Prop() value = 0;
  @Prop() max = 100;

  render() {
    const percent = this.max === 0 ? 0 : Math.min(100, Math.max(0, (this.value / this.max) * 100));
    return (
      <Host role="progressbar" aria-valuemin="0" aria-valuemax={this.max} aria-valuenow={this.value}>
        <div class="bar" style={{ '--n-value': `${percent}%` }} />
      </Host>
    );
  }
}
