import { GoogleGenAI } from "@google/genai";

// GEMINI API KEY
const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

// AI CHAT OBJECT
const chat = ai.chats.create({
  model: "gemini-2.5-flash",
});

// Response Schema
const responseSchema = {
  type: "object",
  properties: {
    isMemo: {
      type: "boolean",
      description: "할 일, 메모, 업무, 계획 등 관련 업무",
    },
    content: {
      type: "string",
      description: "할 일 내용(본문)",
    },
    dueDate: {
      type: "string",
      description: "할 일 마감 기한(YYYY-MM-DD)",
    },
  },
  required: ["isMemo", "content", "dueDate"],
  additionalProperties: false,
};

// Response params
// const config = {
//   temperature: 1,
//   maxOutputTokens: 1000,
//   stopSquences: "\\n\\n",
//   systemInstruction: [
//     "말투는 다나까로 바꾸고 말 끝에는 냥을 붙혀줘",
//     "요 뒤에는 냥을 붙히지말아줘",
//   ],
// };
const systemInstruction = [
  `오늘 날짜: ${new Date().toISOString().split("T")[0]}`,
  "당신은 할 일 관리 AI입니다. 오직 할 일이나 업무 관련 내용만 처리합니다.",
  "JSON 형식으로 응답합니다.",
  "할 일이 아닌 일반적인 대화, 인사, 질문은 무시하고, isMemo를 false로 설정합니다.",
  "사용자의 질문을 이해할 수 없는 경우에는 isMemo를 false로 설정합니다.",
  "응답할 때는 할 일 내용, 마감 날짜, 우선 순위, 할 일 종류를 포함한 객체를 생성합니다.",
];
const config = {
  responseMimeType: "application/json", // 형식
  responseJsonSchema: responseSchema, // 구조
  systemInstruction: systemInstruction,
};

export { ai, chat, config, responseSchema };
