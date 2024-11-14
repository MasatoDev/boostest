/************************************************************/
/*********************  HELPER  *****************************/
/************************************************************/
/** @see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt#use_within_json */

// Helper function to run snapshot tests
export const runSnapshotTest = (name: string, value: any) => {
  (BigInt.prototype as any).toJSON = function () {
    return this.toString();
  };

  if (typeof value === "function" || typeof value === "symbol") {
    test(`${name} matches snapshot`, () => {
      expect(value.toString()).toMatchSnapshot();
    });

    return;
  }

  test(`${name} matches snapshot`, () => {
    expect(JSON.stringify(value)).toMatchSnapshot();
  });
};

export const failedTest = (name: string) => {
  test(`${name} matches snapshot`, () => {
    expect(true).toBe(false);
  });
};
