const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("DAOFactory", () => {
  let daoFactory, owner;

  beforeEach(async () => {
    [owner] = await ethers.getSigners();
    const DAOFactory = await ethers.getContractFactory("DAOFactory");
    daoFactory = await DAOFactory.deploy();
  });

  it("Should create DAO", async () => {
    await daoFactory.createDAO("TestDAO");
    const daoCount = await daoFactory.getDAOCount();
    expect(daoCount).to.equal(1);
  });
});