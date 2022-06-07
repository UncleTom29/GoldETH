const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });
const hre = require("hardhat");


// async function main() {

//     const ERC20GildContract = await ethers.getContractFactory(
//         "ERC20Gild", 1000
//       );

//       const deployedERC20GildContract = await ERC20GildContract.deploy(
//     "ERC20Gild Token Contract Address:",
//     deployedERC20GildContract.address
//       );
// }

// const deployedERC20GildContract = ERC20GildContract.deploy(
//   "ERC20Gild Token Contract Address:",
//   deployedERC20GildContract.address
//     );

// // Call the main function and catch if there is any error
// main()
//   .then(() => process.exit(0))
//   .catch((error) => {
//     console.error(error);
//     process.exit(1);
//   });



async function main() {
  const [deployer] = await hre.ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const weiAmount = (await deployer.getBalance()).toString();
  
  console.log("Account balance:", (await ethers.utils.formatEther(weiAmount)));

  
  const ERC20Gild = await hre.ethers.getContractFactory("ERC20Gild");
  const erc20gild = await ERC20Gild.deploy(ethGild.name());

  await ERC20Gild.deployed();

  console.log("Token address:", erc20gild.address);
}

main()
  .then(() => process.exit(0)) 
  .catch((error) => {
    console.error(error);
    process.exit(1);
});