"use client";
import { Button } from "@/components/ui/button";
import { useContext, useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import axios from "axios";
import { Skeleton } from "@/components/ui/skeleton";
import { LevelContext } from "./LevelContext";
import { error } from "console";

export default function PromptArea() {
  const levelContext = useContext(LevelContext);
  //this provides a non null value before destructuring
  const uploadedFiles = levelContext?.uploadedFiles || [];
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
      var devUrl = "";
      if(process.env.NODE_ENV == "development"){
        if (!process.env.NEXT_PUBLIC_DEV_URL) {
          throw new Error("DEV_URL is not defined in environment variables.");
        }
        devUrl = process.env.NEXT_PUBLIC_DEV_URL;
      }
      else if(process.env.NODE_ENV == "production"){
        if (!process.env.NEXT_PUBLIC_PROD_URL) {
          throw new Error("PROD_URL is not defined in environment variables.");
        }
        devUrl = "/api/chat";
      }
      const response = await axios.post(devUrl, {
        message: question,
        listOfFiles: uploadedFiles
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
    <div className="flex flex-col justify-start w-full px- md:px-0 md:basis-2/3 lg:basis-3/4 ">
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
