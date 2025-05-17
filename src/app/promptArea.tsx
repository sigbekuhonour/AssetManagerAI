"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import axios from "axios";
import { Skeleton } from "@/components/ui/skeleton";

export default function PromptArea({uploadedFilesList}) {
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
      const response = await axios.post("http://localhost:50000/chat", {
        message: question,
        listOfFiles: uploadedFilesList
      });
      const value = response.data.message;
      setGeneratedMessage(value || "No response received.");
    } catch (error) {
      setGeneratedMessage("An error occurred while fetching the response.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col justify-start sm:basis-1/2 md: basis-2/3 lg:basis-3/4 ">
      <Textarea
        className="bg-black text-white"
        placeholder="Type your message here."
        value={prompt}
        onChange={(e) => {
          setPrompt(e.target.value);
        }}
      />
      <Button
        className="bg-black text-white hover:bg-neutral-700"
        onClick={() => getAnswer(prompt)}
        disabled={loading}
      >
        {loading ? "Sending..." : "Send message"}
      </Button>
      {loading ? (
        <Skeleton className="w-full h-40 bg-gray-200 animate-pulse pt-16" />
      ) : (
        <h1>{generatedMessage}</h1>
      )}
    </div>
  );
}
