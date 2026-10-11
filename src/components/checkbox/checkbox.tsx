import { AttachInternals, Component, Event, EventEmitter, h, Host, Listen, Method, Prop, Watch } from '@stencil/core';

import { writeFormValue, writeValidity } from '../../utils/form';

import { IconCheck } from '../../utils/icons';

@Component({
  tag: 'n-checkbox',
  styleUrls: ['../../global/host.css', 'checkbox.css'],
  shadow: { delegatesFocus: true },
  formAssociated: true,
})
export class Checkbox {
  @AttachInternals() internals!: ElementInternals;

  @Prop({ mutable: true, reflect: true }) checked = false;
  @Prop() defaultChecked = false;
  @Prop() value = 'on';
  @Prop() name?: string;
  @Prop({ reflect: true }) disabled = false;
  @Prop() required = false;

  @Event({ eventName: 'n-change' }) nChange!: EventEmitter<boolean>;

  private initial = false;
  private button?: HTMLButtonElement;

  componentWillLoad() {
    if (this.checked) this.initial = true;
    else if (this.defaultChecked) this.checked = true;
    this.initial = this.checked;
    this.sync();
  }

  @Watch('checked')
  sync() {
    writeFormValue(this.internals, this.checked ? this.value : null, this.checked ? 'checked' : '');
    if (this.required && !this.checked) {
      writeValidity(this.internals, { valueMissing: true }, 'Marque esta opção', this.button);
    } else {
      writeValidity(this.internals, {});
    }
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
          role="checkbox"
          aria-checked={this.checked ? 'true' : 'false'}
          disabled={this.disabled}
        >
          <span class="mark">
            <IconCheck />
          </span>
        </button>
      </Host>
    );
  }
}
