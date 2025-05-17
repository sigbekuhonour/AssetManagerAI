import { supabase } from '@/lib/supabase'
import { generateText} from 'ai';
import { openai } from '@ai-sdk/openai';
import "dotenv/config";

//// get signed url
async function readFile(bucketName, filePath) {
  const { data, error } = await supabase
    .storage
    .from(bucketName)
    .createSignedUrl(filePath,300);

  if (error) {
    console.error('Error creating signed url', error.message);
    return;
  }
  return data;
}
////


export async function generateCompletion(message,listOfFiles) {
  if (!process.env.OPENAI_API_KEY) {
    console.error("No API key found in environment variables!");
    return;
  }

  try {
    ///check if supabase is empty or not
  const { data, error } = await supabase
  .storage
  .from("assets")
  .list("", {
    limit: 100,
    offset: 0,
    sortBy: { column: 'name', order: 'asc' },
  })
  ////
  
  if (error) {
    console.error('Error listing folder:', error.message);
    return error
  }
  else if(data.length === 1){
  console.log("Supabase storage contains no files");
  const result =  await generateText({
    model:openai('gpt-4o'),
    messages: [
      { role: 'system', content: "Engineering asset management refers to the systematic process of managing physical assets—such as machinery, equipment, infrastructure, and facilities—throughout their lifecycle. This lifecycle includes everything from acquisition and operation to maintenance and eventual disposal. You answer strictly om Engineering asset management(EAM)" },
      { role: 'user', content: message },
    ],
  })
  return result.text;
  //const openai = new OpenAI({ apiKey: `${process.env.OPENAI_API_KEY}` });
  // const completion = await openai.chat.completions.create({
  //   model: "gpt-4o-mini",
  //   messages: [
  //     {
  //       role: "developer",
  //       content: [
  //         {
  //           type: "text",
  //           text: `
  //               You are a helpful assistant that answers programming questions 
  //               on Managing Engineering Assets.
  //             `,
  //         },
  //       ],
  //     },
  //     {
  //       role: "user",
  //       content: [
  //         {
  //           type: "text",
  //           text: `${message}`,
  //         },
  //       ],
  //     },
  //     {
  //       role: "assistant",
  //       content: [
  //         {
  //           type: "text",
  //           text: "Provide a concise and clear explanation while also providing supporting links to back up this information highlighted properly",
  //         },
  //       ],
  //     },
  //     {
  //       role: "user",
  //       content: [
  //         {
  //           type: "text",
  //           text: "Remove any asterik in generated response and replace them with paragraphed bullets",
  //         },
  //       ],
  //     },
  //   ],
  // });
  // //console.log(completion.choices[0].message.content);
  // return completion.choices[0].message.content; //my res should be the entire completiton which is the json.

  // // eslint-disable-next-line @typescript-eslint/no-unused-vars
}
//supabase contains files
else{
  //list all the files//
  const { data, error } = await supabase
  .storage
  .from("assets")
  .list("", {
    limit: 100,
    offset: 0,
    sortBy: { column: 'name', order: 'asc' },
  })
  /////
  if(error){
    console.log("An error occurred when listing all files in the storage")
    return error
  }
  console.log("Supabase storage contains files",data);
  console.log("The files in here to be processed is ",listOfFiles[0])
  /*
  const result = await generateText({
    model: openai('gpt-4o'),
    messages: [
      {
        role: 'system',
        content: "You are really good at your job.",
      },
      {
        role: 'user',
        content: [
          {
            type: 'text',
            text: `${message}`,
          },
          {
            type: 'file',
            data: await readFile("assets",listOfFiles[0].path),
            mimeType: 'application/pdf',
            // filename: listOfFiles[0], // optional
          },
        ],
      },
    ],
  });
  */

  const result = await generateText({
    model: openai('gpt-4o'),
    messages: [
      {
        role: 'system',
        content: "Engineering asset management refers to the systematic process of managing physical assets—such as machinery, equipment, infrastructure, and facilities—throughout their lifecycle. This lifecycle includes everything from acquisition and operation to maintenance and eventual disposal. You answer strictly om Engineering asset management(EAM)",
      },
      {
        role: 'user',
        content: [
          {
            type: 'text',
            text: message,
          },
          {
            type: 'file',
            data: (await readFile("assets", listOfFiles[0].path))?.signedUrl ?? "",
            mimeType: 'application/pdf',
          },
        ],
      },
    ],
  });

  return result.text;
} 
}
catch (error) {
  console.log(error);
  //console.error("Error calling OpenAI API:", error);
  return "Oops, an error occurred try again later.";
}
}
