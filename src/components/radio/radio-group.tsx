import { AttachInternals, Component, Element, Event, EventEmitter, h, Listen, Prop, Watch } from '@stencil/core';

import { writeFormValue, writeValidity } from '../../utils/form';

import type { Radio } from './radio';

@Component({
  tag: 'n-radio-group',
  styleUrls: ['../../global/host.css', 'radio.css'],
  shadow: true,
  formAssociated: true,
})
export class RadioGroup {
  @Element() host!: HTMLElement;
  @AttachInternals() internals!: ElementInternals;

  @Prop({ mutable: true }) value?: string;
  @Prop() name?: string;
  @Prop({ reflect: true }) disabled = false;
  @Prop() required = false;

  @Event({ eventName: 'n-change' }) nChange!: EventEmitter<string>;

  private initial?: string;

  componentWillLoad() {
    this.initial = this.value;
    this.sync();
  }

  componentDidLoad() {
    this.syncItems();
  }

  @Watch('value')
  @Watch('disabled')
  onValue() {
    this.sync();
    this.syncItems();
  }

  @Listen('n-radio-select')
  onSelect(event: CustomEvent<string>) {
    event.stopPropagation();
    if (this.disabled) return;
    this.value = event.detail;
    this.nChange.emit(this.value);
  }

  formResetCallback() {
    this.value = this.initial;
  }

  private items(): Radio[] {
    return Array.from(this.host.querySelectorAll('n-radio')) as unknown as Radio[];
  }

  private sync() {
    writeFormValue(this.internals, this.value ?? null, this.value ?? '');
    if (this.required && !this.value) {
      writeValidity(this.internals, { valueMissing: true }, 'Escolha uma opção');
    } else {
      writeValidity(this.internals, {});
    }
  }

  private syncItems() {
    this.items().forEach(item => {
      item.checked = item.value === this.value;
      item.groupDisabled = this.disabled;
    });
  }

  render() {
    return (
      <div role="radiogroup">
        <slot />
      </div>
    );
  }
}
