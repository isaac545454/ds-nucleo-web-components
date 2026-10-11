import { AttachInternals, Component, Element, Event, EventEmitter, h, Host, Listen, Method, Prop, State, Watch } from '@stencil/core';

import { writeFormValue, writeValidity } from '../../utils/form';

import { IconCheck, IconChevronDown } from '../../utils/icons';
import { place } from '../../utils/position';

@Component({
  tag: 'n-select',
  styleUrls: ['../../global/host.css', 'select.css'],
  shadow: { delegatesFocus: true },
  formAssociated: true,
})
export class Select {
  @Element() host!: HTMLElement;
  @AttachInternals() internals!: ElementInternals;

  @Prop({ mutable: true }) value?: string;
  @Prop() defaultValue?: string;
  @Prop() name?: string;
  @Prop() placeholder = 'Selecione';
  @Prop({ reflect: true }) disabled = false;
  @Prop() required = false;

  @Event({ eventName: 'n-change' }) nChange!: EventEmitter<string>;

  @State() open = false;

  private trigger?: HTMLButtonElement;
  private popup?: HTMLDivElement;
  private initial?: string;

  componentWillLoad() {
    if (this.value == null && this.defaultValue != null) this.value = this.defaultValue;
    this.initial = this.value;
    this.sync();
  }

  componentDidRender() {
    this.markOptions();
    if (this.open && this.trigger && this.popup) {
      this.popup.style.width = `${this.trigger.offsetWidth}px`;
      place(this.trigger, this.popup, 'bottom', 4, 'start');
    }
  }

  @Watch('value')
  @Watch('required')
  sync() {
    writeFormValue(this.internals, this.value ?? null, this.value ?? '');
    if (this.required && !this.value) {
      writeValidity(this.internals, { valueMissing: true }, 'Selecione uma opção', this.trigger);
    } else {
      writeValidity(this.internals, {});
    }
  }

  formResetCallback() {
    this.value = this.initial;
    this.open = false;
  }

  @Method()
  async focusInput() {
    this.trigger?.focus();
  }

  @Listen('n-option-select')
  onOption(event: CustomEvent<string>) {
    event.stopPropagation();
    const option = event.target as HTMLElement;
    if (!this.host.contains(option)) return;
    this.value = event.detail;
    this.open = false;
    this.nChange.emit(event.detail);
  }

  @Listen('click', { target: 'document' })
  onDocumentClick(event: MouseEvent) {
    if (!this.open) return;
    if (!event.composedPath().includes(this.host)) this.open = false;
  }

  @Listen('keydown', { target: 'document' })
  onEscape(event: KeyboardEvent) {
    if (event.key === 'Escape' && this.open) this.open = false;
  }

  private options() {
    return Array.from(this.host.querySelectorAll('n-option')) as Array<HTMLElement & { value?: string; selected: boolean }>;
  }

  private markOptions() {
    this.options().forEach(option => {
      option.selected = option.value === this.value;
    });
  }

  private label() {
    return this.options().find(option => option.value === this.value)?.textContent?.trim() ?? '';
  }

  private toggle = () => {
    if (this.disabled) return;
    this.open = !this.open;
  };

  render() {
    const label = this.label();
    return (
      <Host>
        <button
          ref={element => (this.trigger = element)}
          class="trigger"
          type="button"
          role="combobox"
          aria-expanded={this.open ? 'true' : 'false'}
          aria-haspopup="listbox"
          disabled={this.disabled}
          onClick={this.toggle}
        >
          <span class={{ label: true, placeholder: !label }}>{label || this.placeholder}</span>
          <IconChevronDown />
        </button>
        <div ref={element => (this.popup = element)} class={{ popup: true, open: this.open }} role="listbox">
          <slot />
        </div>
      </Host>
    );
  }
}
