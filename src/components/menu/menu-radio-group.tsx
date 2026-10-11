import { Component, Element, Event, EventEmitter, h, Listen, Prop, Watch } from '@stencil/core';

@Component({
  tag: 'n-menu-radio-group',
  styleUrls: ['../../global/host.css', 'menu.css'],
  shadow: true,
})
export class MenuRadioGroup {
  @Element() host!: HTMLElement;

  @Prop({ mutable: true }) value?: string;

  @Event({ eventName: 'n-change' }) nChange!: EventEmitter<string>;

  componentDidLoad() {
    this.sync();
  }

  @Watch('value')
  sync() {
    this.host.querySelectorAll('n-menu-radio').forEach(node => {
      const item = node as HTMLElement & { value?: string; checked: boolean };
      item.checked = item.value === this.value;
    });
  }

  @Listen('n-menu-radio')
  onRadio(event: CustomEvent<string>) {
    event.stopPropagation();
    this.value = event.detail;
    this.nChange.emit(this.value);
  }

  render() {
    return (
      <div role="group">
        <slot />
      </div>
    );
  }
}
