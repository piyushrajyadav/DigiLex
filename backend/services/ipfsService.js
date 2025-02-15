import axios from "axios";

export const storeOnIPFS = async (fileBuffer) => {
  const formData = new FormData();
  formData.append("file", new Blob([fileBuffer]));
  
  const response = await axios.post(
    "https://api.web3.storage/upload",
    formData,
    { headers: { Authorization: `Bearer ${process.env.WEB3_STORAGE_KEY}` } }
  );
  return response.data.cid;
};