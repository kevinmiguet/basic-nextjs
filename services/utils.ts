export function getter<T>(search: Partial<T>, list: T[]): T[] {
  const keys = Object.keys(search);
  const values = Object.values(search);
  return list.filter((el) => el[keys[0]] === values[0]);
}
