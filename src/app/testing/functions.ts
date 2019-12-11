export function appTestingMockReadOnlyProperties<T extends {}, K extends keyof T>(
  translation: T,
  property: K,
  value: T[K],
) {
  Object.defineProperty(translation, property, { get: () => value });
}

export function appTestingNoopMethod() {
  return '';
}
