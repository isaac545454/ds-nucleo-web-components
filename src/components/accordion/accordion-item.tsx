import { Component, Element, Event, EventEmitter, h, Prop } from '@stencil/core';

import { IconChevronDown } from '../../utils/icons';

@Component({
  tag: 'n-accordion-item',
  styleUrls: ['../../global/host.css', 'accordion.css'],
  shadow: { delegatesFocus: true },
})
export class AccordionItem {
  @Element() host!: HTMLElement;

  @Prop() value?: string;
  @Prop({ mutable: true, reflect: true }) open = false;
  @Prop({ reflect: true }) disabled = false;

  @Event({ eventName: 'n-accordion-toggle' }) toggled!: EventEmitter<void>;

  private toggle = () => {
    if (this.disabled) return;
    const accordion = this.host.closest('n-accordion') as (HTMLElement & { type?: string; collapsible?: boolean }) | null;
    const closing = this.open;
    if (closing && accordion?.type === 'single' && accordion.collapsible === false) return;
    this.open = !this.open;
    this.toggled.emit();
  };

  render() {
    return (
      <div>
        <button type="button" aria-expanded={this.open ? 'true' : 'false'} disabled={this.disabled} onClick={this.toggle}>
          <slot name="heading" />
          <span class="chevron">
            <IconChevronDown />
          </span>
        </button>
        <div class="content">
          <div class="inner">
            <div class="pad">
              <slot />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
