import { AttachInternals, Component, Event, EventEmitter, h, Host, Method, Prop, Watch } from '@stencil/core';

import { writeFormValue, writeValidity } from '../../utils/form';

@Component({
  tag: 'n-textarea',
  styleUrls: ['../../global/host.css', '../input/input.css'],
  shadow: { delegatesFocus: true },
  formAssociated: true,
})
export class Textarea {
  @AttachInternals() internals!: ElementInternals;

  @Prop({ mutable: true }) value = '';
  @Prop() defaultValue = '';
  @Prop() name?: string;
  @Prop() placeholder?: string;
  @Prop() rows = 3;
  @Prop() maxlength?: number;
  @Prop({ reflect: true }) disabled = false;
  @Prop() required = false;
  @Prop() readonly = false;

  @Event({ eventName: 'n-input' }) nInput!: EventEmitter<string>;
  @Event({ eventName: 'n-change' }) nChange!: EventEmitter<string>;

  private field?: HTMLTextAreaElement;

  componentWillLoad() {
    if (!this.value && this.defaultValue) this.value = this.defaultValue;
    this.sync();
  }

  @Watch('value')
  @Watch('required')
  sync() {
    writeFormValue(this.internals, this.value, this.value);
    if (this.required && !this.value) {
      writeValidity(this.internals, { valueMissing: true }, 'Preencha este campo', this.field);
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
    this.field?.focus();
  }

  private onInput = (event: Event) => {
    this.value = (event.target as HTMLTextAreaElement).value;
    this.nInput.emit(this.value);
  };

  render() {
    return (
      <Host>
        <textarea
          ref={element => (this.field = element)}
          part="textarea"
          rows={this.rows}
          value={this.value}
          placeholder={this.placeholder}
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
