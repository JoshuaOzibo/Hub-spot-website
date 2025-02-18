import { useState } from "react";
import { IoIosPaperPlane } from "react-icons/io";
import { HfInference } from "@huggingface/inference";

const HubBot = () => {
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState<
    { role: "user" | "bot"; content: string }[]
  >([]);
  const [isLoading, setIsLoading] = useState(false);

  const client = new HfInference(import.meta.env.VITE_HUGGING_FACE_API_KEY);

  const handleSendMessage = async () => {
    if (!message.trim() || isLoading) return;

    // Add user message to chat
    setChatHistory((prev) => [...prev, { role: "user", content: message }]);
    setIsLoading(true);

    try {
      let botResponse = "";
      const stream = client.chatCompletionStream({
        model: "google/gemma-2-2b-it",
        messages: [
          ...chatHistory.map((chat) => ({
            role: chat.role === "bot" ? "assistant" : "user",
            content: chat.content,
          })),
          { role: "user", content: message },
        ],
        max_tokens: 500,
      });

      // Start showing the response immediately
      setChatHistory((prev) => [...prev, { role: "bot", content: "" }]);

      for await (const chunk of stream) {
        if (chunk.choices && chunk.choices.length > 0) {
          const newContent = chunk.choices[0].delta.content;
          botResponse += newContent;

          // Update the bot's message in real-time
          setChatHistory((prev) => {
            const newHistory = [...prev];
            newHistory[newHistory.length - 1].content = botResponse;
            return newHistory;
          });
        }
      }
    } catch (error) {
      console.error("Error:", error);
      setChatHistory((prev) => [
        ...prev,
        {
          role: "bot",
          content: "Sorry, I encountered an error. Please try again.",
        },
      ]);
    } finally {
      setIsLoading(false);
      setMessage("");
    }
  };

  return (
    <section className="w-[400px] rounded-lg bg-white h-[540px]">
      <div className="bg-[#2d475e] w-full h-[70px] rounded-t-lg">
        <h1 className="text-white text-lg py-5 ml-5 font-bold">HubBot</h1>
      </div>
      <div className="w-full h-[400px] overflow-y-scroll p-4">
        {chatHistory.map((chat, index) => (
          <div
            key={index}
            className={`mb-4 ${
              chat.role === "user" ? "text-right" : "text-left"
            }`}
          >
            <div
              className={`inline-block p-3 rounded-lg ${
                chat.role === "user"
                  ? "bg-[#2d475e] text-white"
                  : "bg-gray-100 text-gray-800"
              }`}
            >
              {chat.content ||
                (isLoading && chat.role === "bot" ? "Typing..." : chat.content)}
            </div>
          </div>
        ))}
      </div>

      <div className="relative px-5">
        <input
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          placeholder="Write a message..."
          type="text"
          className="w-full px-5 outline-none border-2 border-slate-300 h-[50px] bg-white rounded-full"
          onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
          disabled={isLoading}
        />
        <div
          onClick={handleSendMessage}
          className={`cursor-pointer ${
            message && !isLoading
              ? "absolute right-8 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 bg-slate-700 rounded-full"
              : "absolute right-8 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 bg-slate-200 rounded-full"
          }`}
        >
          <IoIosPaperPlane
            size={22}
            className={message && !isLoading ? "text-white" : "text-slate-400"}
          />
        </div>
      </div>
    </section>
  );
};

export default HubBot;
