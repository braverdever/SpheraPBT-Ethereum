import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const SpheraVaultModule = buildModule("SpheraVault", (m) => {
  const lock = m.contract("SpheraVault", ["SpheraVault", "SPBT", 100]);

  return { lock };
});

export default SpheraVaultModule;
