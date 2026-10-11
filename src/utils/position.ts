export type Placement = 'top' | 'right' | 'bottom' | 'left';

export function place(
  anchor: HTMLElement,
  floating: HTMLElement,
  placement: Placement,
  gap = 6,
  align: 'start' | 'center' | 'end' = 'center',
) {
  const rect = anchor.getBoundingClientRect();
  const width = floating.offsetWidth;
  const height = floating.offsetHeight;
  let top = rect.bottom + gap;
  let left = rect.left;

  if (placement === 'top') top = rect.top - gap - height;
  if (placement === 'left') {
    top = rect.top;
    left = rect.left - gap - width;
  }
  if (placement === 'right') {
    top = rect.top;
    left = rect.right + gap;
  }

  if (align === 'center' && (placement === 'top' || placement === 'bottom')) {
    left = rect.left + rect.width / 2 - width / 2;
  }
  if (align === 'center' && (placement === 'left' || placement === 'right')) {
    top = rect.top + rect.height / 2 - height / 2;
  }
  if (align === 'end' && (placement === 'top' || placement === 'bottom')) {
    left = rect.right - width;
  }

  const margin = 8;
  const maxLeft = Math.max(margin, window.innerWidth - width - margin);
  const maxTop = Math.max(margin, window.innerHeight - height - margin);
  floating.style.top = `${Math.min(Math.max(top, margin), maxTop)}px`;
  floating.style.left = `${Math.min(Math.max(left, margin), maxLeft)}px`;
}
