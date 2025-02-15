const { ethers } = require("hardhat");

module.exports = async () => {
  const [deployer] = await ethers.getSigners();
  
  // Deploy LegalDocument
  const LegalDocument = await ethers.getContractFactory("LegalDocument");
  const legalDoc = await LegalDocument.deploy();
  await legalDoc.deployed();

  // Deploy DAOFactory
  const DAOFactory = await ethers.getContractFactory("DAOFactory");
  const daoFactory = await DAOFactory.deploy();
  await daoFactory.deployed();

  // Deploy TokenReward
  const TokenReward = await ethers.getContractFactory("TokenReward");
  const tokenReward = await TokenReward.deploy();
  await tokenReward.deployed();

  console.log("LegalDocument deployed to:", legalDoc.address);
  console.log("DAOFactory deployed to:", daoFactory.address);
  console.log("TokenReward deployed to:", tokenReward.address);
};