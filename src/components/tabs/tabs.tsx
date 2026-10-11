import { Component, Element, Event, EventEmitter, h, Listen, Prop, Watch } from '@stencil/core';

@Component({
  tag: 'n-tabs',
  styleUrls: ['../../global/host.css', 'tabs.css'],
  shadow: true,
})
export class Tabs {
  @Element() host!: HTMLElement;

  /** Value of the selected tab. */
  @Prop({ mutable: true }) value?: string;

  @Event({ eventName: 'n-change' }) nChange!: EventEmitter<string>;

  componentDidLoad() {
    this.sync();
  }

  @Watch('value')
  onValue() {
    this.sync();
  }

  @Listen('n-tab-select')
  onSelect(event: CustomEvent<string>) {
    event.stopPropagation();
    this.value = event.detail;
    this.nChange.emit(this.value);
  }

  private sync() {
    const tabs = Array.from(this.host.querySelectorAll('n-tab')) as Array<HTMLElement & { value?: string; selected: boolean }>;
    const panels = Array.from(this.host.querySelectorAll('n-tab-panel')) as Array<HTMLElement & { value?: string; active: boolean }>;
    if (!this.value && tabs[0]?.value) this.value = tabs[0].value;
    tabs.forEach(tab => {
      tab.selected = tab.value === this.value;
    });
    panels.forEach(panel => {
      panel.active = panel.value === this.value;
    });
  }

  render() {
    return <slot />;
  }
}
