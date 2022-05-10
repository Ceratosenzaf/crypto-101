import { HardhatUserConfig, task } from "hardhat/config";

import "@nomiclabs/hardhat-waffle";

// This is a sample Hardhat task. To learn how to create your own go to https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (args, hre) => {
  const accounts = await hre.ethers.getSigners();

  accounts.forEach((account) => console.log(account.address));
});

const config: HardhatUserConfig = {
  solidity: "0.8.4",
};

export default config;
