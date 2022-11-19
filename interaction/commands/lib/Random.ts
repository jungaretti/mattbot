export function randomElement<T>(elements: Array<T>): T {
  const index = Math.floor(Math.random() * elements.length);
  return elements[index];
}
