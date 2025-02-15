import { ethers } from "ethers";
import DAOFactory from "../smart-contracts/artifacts/DAOFactory.sol/DAOFactory.json";

export const deployDAOContract = async (name, description) => {
  const provider = new ethers.JsonRpcProvider(process.env.BLOCKCHAIN_RPC_URL);
  const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
  const factory = new ethers.ContractFactory(
    DAOFactory.abi,
    DAOFactory.bytecode,
    signer
  );
  const contract = await factory.deploy(name, description);
  return contract.address;
};