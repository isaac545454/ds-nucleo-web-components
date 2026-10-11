import { Component, Event, EventEmitter, h, Prop } from '@stencil/core';

@Component({
  tag: 'n-tab',
  styleUrls: ['../../global/host.css', 'tabs.css'],
  shadow: { delegatesFocus: true },
})
export class Tab {
  @Prop() value!: string;
  @Prop({ mutable: true, reflect: true }) selected = false;
  @Prop({ reflect: true }) disabled = false;

  @Event({ eventName: 'n-tab-select' }) selectedEvent!: EventEmitter<string>;

  private choose = () => {
    if (this.disabled) return;
    this.selectedEvent.emit(this.value);
  };

  render() {
    return (
      <button type="button" role="tab" aria-selected={this.selected ? 'true' : 'false'} disabled={this.disabled} onClick={this.choose}>
        <slot />
      </button>
    );
  }
}
