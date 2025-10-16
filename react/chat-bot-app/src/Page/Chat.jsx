import { chat, config, responseSchema } from "../utils/genai";
import { useState } from "react";
import MassageList from "../components/MessageList";
import ChatForm from "../components/ChatForm";

export default function Chat() {
  // Init State
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    // exception
    if (isLoading || prompt.trim() === "") return;

    setMessages((prev) => [...prev, { role: "user", content: prompt }]);
    const currentPrompt = prompt;
    setPrompt("");
    setIsLoading(true);
    await generateAiContent(currentPrompt);
    setIsLoading(false);
  }

  async function generateAiContent(currentPrompt) {
    try {
      const response = await chat.sendMessage({
        message: currentPrompt,
        config: config,
      });
      // reset prompt
      // setPrompt("");
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
