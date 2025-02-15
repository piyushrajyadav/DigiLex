const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  
  console.log("Deploying contracts with account:", deployer.address);
  
  // Deploy LegalDocument
  const LegalDocument = await ethers.getContractFactory("LegalDocument");
  const legalDoc = await LegalDocument.deploy();
  await legalDoc.waitForDeployment();
  
  console.log("LegalDocument deployed to:", await legalDoc.getAddress());
  
  // Deploy other contracts similarly...
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });