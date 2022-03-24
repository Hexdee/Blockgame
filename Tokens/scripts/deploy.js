const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const MyERC20 = await ethers.getContractFactory("MyERC20");
  const myerc20 = await MyERC20.deploy();

  const MyNFT = await ethers.getContractFactory("MyNFT");
  const mynft = await MyNFT.deploy();

  console.log("MyERC20 address:", myerc20.address);
  console.log("MyNFT address:", mynft.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });