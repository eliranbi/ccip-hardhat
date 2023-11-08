
// https://docs.openzeppelin.com/learn/deploying-and-interacting

// Getting a contract instance

// Set up an ethers contract, representing our deployed Sender instance

const hre = require("hardhat");

async function sendMessage() {

    //Address of the sender contract
    const address = '0x8998Ab03B7E4c72a92251854676629Dd5Fee4b85';
    const Sender = await ethers.getContractFactory('Sender');
    const sender = await Sender.attach(address);


    // The chain selector of the destination chain.
    const  destinationChainSelector = 12532609583862916517n;
    // The address of the receiver on the destination chain.
    const receiver = '0xbe2155C150A3A6c87a7afe85D2c9BB1981805fcF';
    const message = 'hello eliran !';


    const response = await sender.sendMessage(destinationChainSelector, receiver, message);


    console.log(response);
    console.log('-----------------------------------');
    console.log( `Tx hash: ${response.hash}`);
    console.log('-----------------------------------');

    // Calling the contract
    // Call the retrieve() function of the deployed Sender contract
    // const value = await sender.retrieve();
    // console.log('Sender value is', value.toString());

    // (Polygon Mumbai)
    // call send message - sendMessage function and fill in the following arguments:
    // destinationChainSelector - CCIP Chain identifier of the target blockchain. You can find each network's chain selector on the supported networks page	
    // value: 12532609583862916517
    // receiver	- The destination smart contract address	Your deployed contract address
    // value: '0xbe2155C150A3A6c87a7afe85D2c9BB1981805fcF'
    // text	- Any string	
    // value: 'Hello World!'

}


sendMessage().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
  

// npx hardhat run --network sepolia ./scripts/receiveMessage.js
// https://ccip.chain.link/msg/0x6a05908f5e50b14f474485e4c3ab6fba1f51a1ce778175424c4a455b3d772c65
// need to wait for staus to be success vs 'Waiting for finality'