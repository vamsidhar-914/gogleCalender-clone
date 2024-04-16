export function formatDate(date: Date, options?: Intl.DateTimeFormatOptions) {
  return Intl.DateTimeFormat(undefined, options).format(date);
}
