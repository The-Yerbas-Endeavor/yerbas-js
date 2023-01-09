const assert = require("assert");
const yerbas = require("../");

describe("utils.satoshiConversion", () => {
  it("Should convert back and forth", () => {
    const x = "213897.47123";
    assert(yerbas.utils.fromSatoshi(yerbas.utils.toSatoshi(x)) === x);
  });
});
