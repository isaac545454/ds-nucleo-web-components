import { Component, Element, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'n-label',
  styleUrls: ['../../global/host.css', 'label.css'],
  shadow: true,
})
export class Label {
  @Element() host!: HTMLElement;

  /** Id of the control this label activates. The `for` attribute is also accepted. */
  @Prop() htmlFor?: string;

  componentWillLoad() {
    if (!this.htmlFor) this.htmlFor = this.host.getAttribute('for') ?? undefined;
  }

  private activate = (event: MouseEvent) => {
    const id = this.htmlFor || this.host.getAttribute('for');
    if (!id) return;
    const target = document.getElementById(id);
    if (!target || event.composedPath().includes(target)) return;
    target.focus();
    target.click();
  };

  render() {
    return (
      <Host>
        <label onClick={this.activate}>
          <slot />
        </label>
      </Host>
    );
  }
}
