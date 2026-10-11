import { FunctionalComponent, h } from '@stencil/core';

export const IconCheck: FunctionalComponent = () => (
  <svg class="icon" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20 6 9 17l-5-5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
);

export const IconX: FunctionalComponent = () => (
  <svg class="icon" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M18 6 6 18M6 6l12 12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
  </svg>
);

export const IconChevronDown: FunctionalComponent = () => (
  <svg class="icon" viewBox="0 0 24 24" aria-hidden="true">
    <path d="m6 9 6 6 6-6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
);

export const IconChevronRight: FunctionalComponent = () => (
  <svg class="icon" viewBox="0 0 24 24" aria-hidden="true">
    <path d="m9 18 6-6-6-6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
);

export const IconCircle: FunctionalComponent = () => (
  <svg class="icon icon-dot" viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="5" fill="currentColor" />
  </svg>
);
