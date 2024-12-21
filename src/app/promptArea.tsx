
"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { generateCompletion } from "./api/openAI";
import { Textarea } from "@/components/ui/textarea";


export default function PromptArea() {
  const [prompt, setPrompt] = useState("");
  const [generatedMessage, setGeneratedMessage] = useState(
    "The answers to your questions will appear here"
  );
  const [loading, setLoading] = useState(false);

  async function getAnswer(question: string) {
    if (!question || question.trim() === "") {
      setGeneratedMessage("Please provide a valid input.");
      return;
    }
    setLoading(true);
    try {
      const value = await generateCompletion(question);
      setGeneratedMessage(value || "No response received.");
    } catch (error) {
      setGeneratedMessage("An error occurred while fetching the response.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col justify-start w-3/4 gap-2">
      <Textarea
        className="bg-black text-white"
        placeholder="Type your message here."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <Button
        className="bg-black text-white"
        onClick={() => getAnswer(prompt)}
        disabled={loading}
      >
        {loading ? "Sending..." : "Send message"}
      </Button>
      <h1>{generatedMessage}</h1>
    </div>
  );
}


























// "use client";
// import { Button } from "@/components/ui/button";
// import { useState } from "react";
// import {generateCompletion} from "./pages/api/openAI";
// import { Textarea } from "@/components/ui/textarea";
// //Users/honoursigbeku/Desktop/AssetManagerAI/api/openAI.js
// export default function PromptArea() {
//   const [prompt, setPrompt] = useState("");
//   const [generatedMessage, setGeneratedMessage] = useState(
//     "The answers to your questions will appear here"
//   );
//   async function getAnswer(question: unknown) {
//     const value = await generateCompletion(question);
//     if (value) {
//       setGeneratedMessage(value);
//     }
//   }
//   return (
//     <div className="flex flex-col justify-start w-3/4 gap-2 ">
//       <Textarea
//       className="bg-black text-white"
//         placeholder="Type your message here."
//         value={prompt}
//         onChange={(e) => {
//           setPrompt(e.target.value);
//         }}
//       />
//       <Button
//       className="bg-black text-white"
//         onClick={() => {
//           getAnswer(prompt);
//         }}
//       >
//         Send message
//       </Button>
//       <h1>{generatedMessage}</h1>
//     </div>
//   );
// }
