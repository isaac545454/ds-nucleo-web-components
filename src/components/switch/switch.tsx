import { AttachInternals, Component, Event, EventEmitter, h, Host, Listen, Method, Prop, Watch } from '@stencil/core';

import { writeFormValue } from '../../utils/form';

@Component({
  tag: 'n-switch',
  styleUrls: ['../../global/host.css', 'switch.css'],
  shadow: { delegatesFocus: true },
  formAssociated: true,
})
export class Switch {
  @AttachInternals() internals!: ElementInternals;

  @Prop({ mutable: true, reflect: true }) checked = false;
  @Prop() defaultChecked = false;
  @Prop() value = 'on';
  @Prop() name?: string;
  @Prop({ reflect: true }) disabled = false;

  @Event({ eventName: 'n-change' }) nChange!: EventEmitter<boolean>;

  private initial = false;
  private button?: HTMLButtonElement;

  componentWillLoad() {
    if (!this.checked && this.defaultChecked) this.checked = true;
    this.initial = this.checked;
    this.sync();
  }

  @Watch('checked')
  sync() {
    writeFormValue(this.internals, this.checked ? this.value : null, this.checked ? 'checked' : '');
  }

  formResetCallback() {
    this.checked = this.initial;
  }

  @Method()
  async focusInput() {
    this.button?.focus();
  }

  @Listen('click')
  protected onHostClick() {
    if (this.disabled) return;
    this.checked = !this.checked;
    this.nChange.emit(this.checked);
  }

  render() {
    return (
      <Host>
        <button
          ref={element => (this.button = element)}
          part="control"
          type="button"
          role="switch"
          aria-checked={this.checked ? 'true' : 'false'}
          disabled={this.disabled}
        >
          <span class="thumb" />
        </button>
      </Host>
    );
  }
}
