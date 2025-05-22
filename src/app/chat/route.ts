import { NextRequest, NextResponse } from "next/server";
import { generateCompletion } from "./openAI";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { message , listOfFiles} = body;

  console.log("Inside the post function");
  console.log(message);
  try{
    const llmResult = await generateCompletion(message,listOfFiles);
    console.log(llmResult);
    return NextResponse.json({ message: llmResult });
  }
  catch(err){
     return NextResponse.json({ error: err})
  }
  
}


export async function GET(_: NextRequest) {
  return NextResponse.json({ message: "I'm here" });
}
