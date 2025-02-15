const { ethers } = require("hardhat");

async function main() {
  const legalDoc = await ethers.getContractAt(
    "LegalDocument", 
    "0xYourContractAddress"
  );
  await legalDoc.storeDocument("QmHash123");
  console.log("Document stored!");
}

main();