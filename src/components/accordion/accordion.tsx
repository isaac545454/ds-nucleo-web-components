import { Component, Element, h, Listen, Prop } from '@stencil/core';

@Component({
  tag: 'n-accordion',
  styleUrls: ['../../global/host.css', 'accordion.css'],
  shadow: true,
})
export class Accordion {
  @Element() host!: HTMLElement;

  /** `single` keeps one item open. `multiple` allows several. */
  @Prop() type: 'single' | 'multiple' = 'single';

  /** When `type` is `single`, allows closing the open item. */
  @Prop() collapsible = true;

  @Listen('n-accordion-toggle')
  onToggle(event: CustomEvent<void>) {
    if (this.type === 'multiple') return;
    const current = event.target as HTMLElement;
    this.host.querySelectorAll('n-accordion-item').forEach(node => {
      const item = node as HTMLElement & { open: boolean };
      if (item !== current) item.open = false;
    });
  }

  render() {
    return <slot />;
  }
}
