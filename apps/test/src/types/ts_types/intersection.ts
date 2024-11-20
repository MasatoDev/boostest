export type IntersectionTypeAlias = {
  intersction: string & number;
  intersction_obj: { name: string } & { ver: number };
  intersction_string: string & "hoga";
  nonNullable: NonNullable<undefined | string | null>;
};

export type IntersectionInterface = {
  intersction: string & number;
  intersction_obj: { name: string } & { ver: number };
  intersction_string: string & "hoga";
  nonNullable: NonNullable<undefined | string | null>;
};

export class IntersectionClass {
  constructor(
    public intersction: string & number,
    public intersction_obj: { name: string } & { ver: number },
    public intersction_string: string & "hoga",
    public nonNullable: NonNullable<undefined | string | null>,
  ) {}
}
