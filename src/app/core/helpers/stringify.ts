import { isArray, isObject, isObjectLike } from 'lodash-es';

// tslint:disable-next-line:no-any
type Replacer = (this: any, key: string, value: any) => any;

const getCircularReplacer = (): Replacer => {
  const seen = new WeakSet();

  return (key, value) => {
    if (isObjectLike(value)) {
      if (seen.has(value)) {
        return '[circular Object]';
      }

      seen.add(value);
    }

    return value;
  };
};

export function stringify(value: unknown): string {
  if (isObject(value)) {
    try {
      return JSON.stringify(value, getCircularReplacer());
    } catch {
      return '[circular Object]';
    }
  } else if (isArray(value)) {
    try {
      return JSON.stringify(value, getCircularReplacer());
    } catch {
      return '[circular Array]';
    }
  }

  return String(value);
}
