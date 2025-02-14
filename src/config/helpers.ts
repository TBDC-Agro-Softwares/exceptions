const isObject = (item: unknown) => typeof item === 'object' && !Array.isArray(item);

export const merge = <T extends object>(target: T, source: { [x: string]: T[keyof T] }): T => {
  const isDeep = (prop: keyof T) => isObject(source[prop as string]) && target !== null && target.hasOwnProperty(prop) && isObject(target[prop]);

  const replaced = Object.getOwnPropertyNames(source)
    .map((prop) => {
      const key = prop as keyof T;

      return { [key]: isDeep(key) ? merge(target[key] as object, source[key as string] as never) : source[key as string] };
    })
    .reduce((a, b) => ({ ...a, ...b }), {});

  return { ...target, ...replaced };
};
