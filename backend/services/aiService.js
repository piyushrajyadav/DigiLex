import OpenAI from "openai";

const openai = new OpenAI(process.env.OPENAI_API_KEY);

export const generateDocument = async (type) => {
  const prompt = `Generate a legal ${type} document.`;
  const response = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [{ role: "user", content: prompt }]
  });
  return response.choices[0].message.content;
};

export const reviewContract = async (contractText) => {
  const response = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [{
      role: "user",
      content: `Review this smart contract for risks: ${contractText}`
    }]
  });
  return response.choices[0].message.content;
};