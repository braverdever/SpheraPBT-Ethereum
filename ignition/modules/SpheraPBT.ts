import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const SpheraPBTModule = buildModule("SpheraPBT", (m) => {
  const lock = m.contract("SpheraPBT", ["SpheraPBT", "SPBT", 100]);

  return { lock };
});

export default SpheraPBTModule;
