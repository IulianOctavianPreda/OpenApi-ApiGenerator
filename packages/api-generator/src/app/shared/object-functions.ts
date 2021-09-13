export function withDeleteProperty(
  callback: (obj: Record<string, unknown>, ...params: unknown[]) => unknown,
  obj: Record<string, Record<string, unknown>>,
  property: string,
  ...params: unknown[]
) {
  const result = callback(obj[property], ...params);
  delete obj[property];
  return result;
}
