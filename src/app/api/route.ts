import { NextApiRequest, NextApiResponse } from "next";
import { generateCompletion } from "./openAI";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
      const {message} = req.body;
      
      const llmResult = await generateCompletion(message)
      
      res.json({message: llmResult});

    } else {
      // Handle any other HTTP method

    }
}

