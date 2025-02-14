export type NestedKeyOf<ObjectType> = {
  [Key in keyof ObjectType]: ObjectType[Key] extends object
    ? // @ts-expect-error Is possible to be infinite
      `${string & Key}.${NestedKeyOf<ObjectType[Key]>}`
    : `${string & Key}`;
}[keyof ObjectType];
