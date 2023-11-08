
// https://docs.openzeppelin.com/learn/deploying-and-interacting

// Getting a contract instance

// Set up an ethers contract, representing our deployed Sender instance

const hre = require("hardhat");

async function receiveMessage() {

    //Address of the Receiver contract 
    const address = '0xbe2155C150A3A6c87a7afe85D2c9BB1981805fcF';
    
    const Receiver = await ethers.getContractFactory('Receiver');
    const receiver = await Receiver.attach(address);
    message = {};

    message = await receiver.getLastReceivedMessageDetails();

    
    console.log(message);
    console.log('-----------------------------------');
    console.log( `Message : ${message[1]}`);
    console.log('-----------------------------------');
    
    
}


receiveMessage().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
  

// npx hardhat run --network polygon ./scripts/receiveMessage.js
