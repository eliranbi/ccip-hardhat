// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

/**
 * You can find the router address on the supported networks page and the 
 * LINK token address on the LINK Token contracts page. 
 * For Ethereum Sepolia, the router address is: 0xD0daae2231E9CB96b94C8512223533293C3693Bf
 * and the LINK contract address is:  0x779877A7B0D9E8603169DdbD7836e478b4624789
 */

async function main() {

  /**
   * Constructor initializes the contract with the router address.
     param router The address of the router contract.
     constructor(address router) CCIPReceiver(router) {}
   * 
   */  
  
  // router address on Polygon network ...
  const routerAddress = '0x70499c328e1E2a3c41108bd3730F6670a44595D1';


  const receiver = await hre.ethers.deployContract("Receiver", [routerAddress], {});

  await receiver.waitForDeployment();

  //console.log( `Lock with ${ethers.formatEther( lockedAmount )}ETH and unlock timestamp ${unlockTime} deployed to ${lock.target}`);
  
  console.log( `--------------------------------`);
  console.log( `Receiver deployed to: ${receiver.target}`);
  console.log( `--------------------------------`);
  console.log(receiver);
  console.log( `--------------------------------`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
