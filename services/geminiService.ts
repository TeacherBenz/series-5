import { GoogleGenAI } from "@google/genai";

const getClient = () => {
  let apiKey = '';
  try {
    // Attempt to access process.env safely
    // In many bundlers (Vite/Webpack), process.env.API_KEY is replaced at build time.
    // However, checking 'process' existence first prevents ReferenceError in strict browser environments.
    if (typeof process !== 'undefined' && process.env) {
      apiKey = process.env.API_KEY || '';
    }
  } catch (error) {
    console.warn("Could not access process.env");
  }

  if (!apiKey) {
    console.error("API Key is missing! AI features will be disabled.");
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

export const getMathHelp = async (problemQuestion: string, currentContext: string) => {
  const client = getClient();
  if (!client) return "ระบบ AI ไม่พร้อมใช้งาน (ไม่พบ API Key) กรุณาลองใหม่อีกครั้ง";

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