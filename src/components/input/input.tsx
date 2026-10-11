import { AttachInternals, Component, Element, Event, EventEmitter, h, Host, Method, Prop, Watch } from '@stencil/core';

import { writeFormValue, writeValidity } from '../../utils/form';

@Component({
  tag: 'n-input',
  styleUrls: ['../../global/host.css', 'input.css'],
  shadow: { delegatesFocus: true },
  formAssociated: true,
})
export class Input {
  @Element() host!: HTMLElement;
  @AttachInternals() internals!: ElementInternals;

  /** Current value. */
  @Prop({ mutable: true }) value = '';

  /** Value restored when the form resets. */
  @Prop() defaultValue = '';

  @Prop() type = 'text';
  @Prop() name?: string;
  @Prop() placeholder?: string;
  @Prop() autocomplete?: string;
  @Prop() inputmode?: string;
  @Prop() min?: string;
  @Prop() max?: string;
  @Prop() step?: string;
  @Prop() pattern?: string;
  @Prop() maxlength?: number;
  @Prop({ reflect: true }) disabled = false;
  @Prop() required = false;
  @Prop() readonly = false;

  @Event({ eventName: 'n-input' }) nInput!: EventEmitter<string>;
  @Event({ eventName: 'n-change' }) nChange!: EventEmitter<string>;

  private input?: HTMLInputElement;

  componentWillLoad() {
    if (!this.value && this.defaultValue) this.value = this.defaultValue;
    this.sync();
  }

  @Watch('value')
  @Watch('required')
  sync() {
    writeFormValue(this.internals, this.value, this.value);
    const input = this.input;
    if (this.required && !this.value) {
      writeValidity(this.internals, { valueMissing: true }, 'Preencha este campo', input);
    } else {
      writeValidity(this.internals, {});
    }
  }

  formResetCallback() {
    this.value = this.defaultValue;
  }

  formStateRestoreCallback(state: string) {
    this.value = state;
  }

  @Method()
  async focusInput() {
    this.input?.focus();
  }

  private onInput = (event: Event) => {
    this.value = (event.target as HTMLInputElement).value;
    this.nInput.emit(this.value);
  };

  render() {
    return (
      <Host>
        <input
          ref={element => (this.input = element)}
          part="input"
          type={this.type}
          value={this.value}
          name={this.name}
          placeholder={this.placeholder}
          autocomplete={this.autocomplete}
          inputMode={this.inputmode}
          min={this.min}
          max={this.max}
          step={this.step}
          pattern={this.pattern}
          maxLength={this.maxlength}
          disabled={this.disabled}
          required={this.required}
          readOnly={this.readonly}
          onInput={this.onInput}
          onChange={() => this.nChange.emit(this.value)}
        />
      </Host>
    );
  }
}
