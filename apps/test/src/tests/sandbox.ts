type main =
  ref_5450c7e54ff602814aefb578141612331188c886e2c092ce0b16692c10a90d0e;
type ref_5450c7e54ff602814aefb578141612331188c886e2c092ce0b16692c10a90d0e = {
  regexp: ref_df316930e33dd8c70ce446a1269ebd0fc8c83648e97cba491329daddc19aef5e;
};
interface ref_df316930e33dd8c70ce446a1269ebd0fc8c83648e97cba491329daddc19aef5e {
  exec(
    string: string,
  ): ref_23fa0c841a57bf38f7d312b179d4bf4f1ae9a2038b2283150dc322460f3c1535 | null;
  test(string: string): boolean;
  readonly source: string;
  readonly global: boolean;
  readonly ignoreCase: boolean;
  readonly multiline: boolean;
  lastIndex: number;
  compile(pattern: string, flags?: string): this;
}
interface ref_23fa0c841a57bf38f7d312b179d4bf4f1ae9a2038b2283150dc322460f3c1535 {
  index: number;
  input: string;
  0: string;
}
