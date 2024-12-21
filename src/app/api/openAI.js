import OpenAI from "openai/index.mjs";
import "dotenv/config";

export async function generateCompletion(message) {
  if (!process.env.OPENAI_API_KEY) {
    console.error("No API key found in environment variables!");
    return;
  }

  const openai = new OpenAI({ apiKey: `${process.env.OPENAI_API_KEY}` });

  try {
    //Messages with the assistant role are presumed to have been generated by the model,
    //perhaps in a previous generation request (see the "Conversations" section below).

    //add a message with the assistant role to serve as a prompt for the extracted text from the uploaded pdf
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: [
            {
              type: "text",
              text: `
                  You are a helpful assistant that answers programming questions 
                  on Managing Engineering Assets.
                `,
            },
          ],
        },
        {
          role: "user",
          content: [
            {
              type: "text",
              text: `${message}`,
            },
          ],
        },
      ],
    });
    return completion.choices[0].message.content; //my res should be the entire completiton which is the json.
    //console.log(completion.choices[0].message.content);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    //console.error('Error calling OpenAI API:', error);
    return "Oops, an error occurred try again later.";
  }
}
//generateCompletion("where is nigeria?");
