import { AttachInternals, Component, Element, Event, EventEmitter, h, Host, Prop, State, Watch } from '@stencil/core';

import { writeFormValue } from '../../utils/form';

@Component({
  tag: 'n-slider',
  styleUrls: ['../../global/host.css', 'slider.css'],
  shadow: { delegatesFocus: true },
  formAssociated: true,
})
export class Slider {
  @Element() host!: HTMLElement;
  @AttachInternals() internals!: ElementInternals;

  @Prop({ mutable: true }) value = 0;
  @Prop() defaultValue?: number;
  @Prop() min = 0;
  @Prop() max = 100;
  @Prop() step = 1;
  @Prop({ reflect: true }) orientation: 'horizontal' | 'vertical' = 'horizontal';
  @Prop({ reflect: true }) disabled = false;
  @Prop() name?: string;

  @Event({ eventName: 'n-input' }) nInput!: EventEmitter<number>;
  @Event({ eventName: 'n-change' }) nChange!: EventEmitter<number>;

  @State() dragging = false;

  private track?: HTMLDivElement;
  private initial = 0;

  componentWillLoad() {
    if (this.defaultValue != null && this.value === 0) this.value = this.defaultValue;
    this.initial = this.value;
    this.sync();
  }

  @Watch('value')
  sync() {
    writeFormValue(this.internals, String(this.value), String(this.value));
  }

  formResetCallback() {
    this.value = this.initial;
  }

  private percent() {
    if (this.max === this.min) return 0;
    return ((this.value - this.min) / (this.max - this.min)) * 100;
  }

  private setFromPointer(event: PointerEvent, emitChange = false) {
    if (!this.track || this.disabled) return;
    const rect = this.track.getBoundingClientRect();
    const ratio =
      this.orientation === 'vertical'
        ? 1 - (event.clientY - rect.top) / rect.height
        : (event.clientX - rect.left) / rect.width;
    const clamped = Math.min(1, Math.max(0, ratio));
    const raw = this.min + clamped * (this.max - this.min);
    const steps = Math.round((raw - this.min) / this.step);
    const next = Math.min(this.max, Math.max(this.min, this.min + steps * this.step));
    this.value = Number(next.toFixed(4));
    this.nInput.emit(this.value);
    if (emitChange) this.nChange.emit(this.value);
  }

  private onPointerDown = (event: PointerEvent) => {
    if (this.disabled) return;
    this.dragging = true;
    (event.currentTarget as HTMLElement).setPointerCapture(event.pointerId);
    this.setFromPointer(event);
  };

  private onPointerMove = (event: PointerEvent) => {
    if (!this.dragging) return;
    this.setFromPointer(event);
  };

  private onPointerUp = (event: PointerEvent) => {
    if (!this.dragging) return;
    this.dragging = false;
    this.setFromPointer(event, true);
  };

  private onKeyDown = (event: KeyboardEvent) => {
    let next = this.value;
    if (event.key === 'ArrowRight' || event.key === 'ArrowUp') next += this.step;
    else if (event.key === 'ArrowLeft' || event.key === 'ArrowDown') next -= this.step;
    else if (event.key === 'Home') next = this.min;
    else if (event.key === 'End') next = this.max;
    else return;
    event.preventDefault();
    this.value = Math.min(this.max, Math.max(this.min, Number(next.toFixed(4))));
    this.nInput.emit(this.value);
    this.nChange.emit(this.value);
  };

  render() {
    const percent = this.percent();
    const thumbStyle =
      this.orientation === 'vertical' ? { bottom: `${percent}%` } : { left: `${percent}%` };
    const rangeStyle = this.orientation === 'vertical' ? { height: `${percent}%` } : { width: `${percent}%` };

    return (
      <Host>
        <div
          ref={element => (this.track = element)}
          class="track"
          onPointerDown={this.onPointerDown}
          onPointerMove={this.onPointerMove}
          onPointerUp={this.onPointerUp}
        >
          <div class="range" style={rangeStyle} />
          <button
            class="thumb"
            style={thumbStyle}
            type="button"
            role="slider"
            aria-valuemin={this.min}
            aria-valuemax={this.max}
            aria-valuenow={this.value}
            aria-orientation={this.orientation}
            disabled={this.disabled}
            onKeyDown={this.onKeyDown}
          />
        </div>
      </Host>
    );
  }
}
