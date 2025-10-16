import { ai } from "../utils/genai";
import { useState } from "react";
import MassageList from "../components/MessageList";
import ChatForm from "../components/ChatForm";

export default function CreateContent() {
  // Init State
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    // exception
    if (isLoading || prompt.trim() === "") return;

    setMessages((prev) => [...prev, { role: "user", content: prompt }]);

    setIsLoading(true);
    await generateAiContent();
    setIsLoading(false);
  }

  async function generateAiContent() {
    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
      });
      // reset prompt
      setPrompt("");
      // save AI Contents
      setMessages((prev) => [...prev, { role: "ai", content: response.text }]);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <MassageList messages={messages} />
      <ChatForm
        prompt={prompt} // user input state
        setPrompt={setPrompt} // user input set state
        isLoading={isLoading} // AI loading state
        onSubmit={handleSubmit} // form element submit event handle function
      />
    </div>
  );
}
