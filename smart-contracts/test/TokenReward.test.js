const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("TokenReward", () => {
  let tokenReward, owner, addr1;

  beforeEach(async () => {
    [owner, addr1] = await ethers.getSigners();
    const TokenReward = await ethers.getContractFactory("TokenReward");
    tokenReward = await TokenReward.deploy();
  });

  it("Should mint tokens", async () => {
    await tokenReward.mint(addr1.address, 1000);
    expect(await tokenReward.balanceOf(addr1.address)).to.equal(1000);
  });
});