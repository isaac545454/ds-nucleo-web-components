export function writeFormValue(internals: ElementInternals, value: string | File | FormData | null, state?: string | File | FormData | null) {
  if (typeof internals?.setFormValue === 'function') {
    internals.setFormValue(value, state ?? undefined);
  }
}

export function writeValidity(internals: ElementInternals, flags: ValidityStateFlags, message = '', anchor?: HTMLElement) {
  if (typeof internals?.setValidity === 'function') {
    internals.setValidity(flags, message, anchor);
  }
}
