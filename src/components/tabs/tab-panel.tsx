import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'n-tab-panel',
  styleUrls: ['../../global/host.css', 'tabs.css'],
  shadow: true,
})
export class TabPanel {
  @Prop() value!: string;
  @Prop({ mutable: true, reflect: true }) active = false;

  render() {
    return (
      <div role="tabpanel" hidden={!this.active}>
        <slot />
      </div>
    );
  }
}
