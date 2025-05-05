import { openai } from '@ai-sdk/openai';
import { generateText} from 'ai';

export async function generateCompletion(message){
    if (!process.env.OPENAI_API_KEY) {
        console.error("No API key found in environment variables!");
        return;
      }
      const result = await generateText({
        model: openai('gpt-4o'),
        messages: [
          {
            role: 'user',
            content: [
              {
                type: 'text',
                text: `${message}`,
              },
              {
                type: 'file',
                data: fs.readFileSync('./assets.pdf'),
                mimeType: 'application/pdf',
                filename: 'assets.pdf', // optional
              },
            ],
          },
        ],
      });
}



