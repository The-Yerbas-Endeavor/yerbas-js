const assert = require("assert");
const os = require("os");
const yerbas = require("../");

describe("rpc.getBlockchainInfo", async () => {
  const rpc = yerbas.rpc.fromCookie(
    "~/.yerbascore/.cookie".replace("~", os.homedir)
  );
  it("Should return height", async () => {
    assert((await rpc.getBlockchainInfo()).blocks !== undefined);
  });
});
