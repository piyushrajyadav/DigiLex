const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("LegalDocument", () => {
  let legalDoc, owner;

  beforeEach(async () => {
    [owner] = await ethers.getSigners();
    const LegalDocument = await ethers.getContractFactory("LegalDocument");
    legalDoc = await LegalDocument.deploy();
  });

  it("Should store and retrieve document", async () => {
    await legalDoc.storeDocument("QmHash123");
    const doc = await legalDoc.getDocument("QmHash123");
    expect(doc.owner).to.equal(owner.address);
  });
});