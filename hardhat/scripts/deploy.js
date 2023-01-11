require("dotenv").config();
const { ethers } = require("hardhat");
const hre = require("hardhat");

async function main() {
  const whitelist = await ethers.getContractFactory("Whitelist");
  const Whitelist = await whitelist.deploy(10);
  console.log("deploying whitelist ......");
  await Whitelist.deployed();

  console.log("Whitelist contract deployed at: ", Whitelist.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
