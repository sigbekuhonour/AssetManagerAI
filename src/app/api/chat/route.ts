import { NextApiRequest  } from "next";
import {NextResponse} from 'next/server'
import { generateCompletion } from "../openAI";


export async function POST(req: NextApiRequest) {
    const {message} = req.body;
    
    console.log('Inside the post function');

    const llmResult = await generateCompletion(message)

    return NextResponse.json({message: llmResult});
}

export async function GET(req: NextApiRequest) {
      return NextResponse.json({message: "I'm here"});
}


