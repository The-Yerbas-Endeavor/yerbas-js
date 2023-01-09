const os = require("os");
const yerbas = require("../");
const assert = require("assert");

describe("accumulator.countBlocks", async () => {
  const rpc = yerbas.rpc.fromCookie(
    "~/.yerbascore/.cookie".replace("~", os.homedir)
  );

  it("Should start iterate blocks", () => {
    const acc = new yerbas.Accumulator(rpc, 0, 1, (h, b) => {
      if (h % 1000 === 0) {
        console.log(h);
        console.log(JSON.stringify(b));
      }
    });
    acc.start();
  });
});
