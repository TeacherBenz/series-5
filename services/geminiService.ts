import { GoogleGenAI } from "@google/genai";

const getClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.error("API Key is missing!");
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

export const getMathHelp = async (problemQuestion: string, currentContext: string) => {
  const client = getClient();
  if (!client) return "ขออภัย ระบบ AI ยังไม่พร้อมใช้งานในขณะนี้ (Missing API Key)";

  try {
    const prompt = `
      You are a friendly and encouraging Math Tutor for a high school student in Thailand.
      The student is stuck on this problem: "${problemQuestion}".
      Context/Topic: "${currentContext}".
      
      Please provide a helpful HINT or a guiding question to help them solve it themselves. 
      DO NOT give the direct answer or the choice immediately. 
      Answer strictly in Thai language.
      Keep the explanation short, simple, and encouraging.
      Use emojis to be friendly.
    `;

    const response = await client.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "ขออภัย เกิดข้อผิดพลาดในการเชื่อมต่อกับครูผู้ช่วย AI";
  }
};
