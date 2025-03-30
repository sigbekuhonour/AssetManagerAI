import { supabase } from "@/lib/supabase";
import OpenAI from "openai";
const openai = new OpenAI();

async function processFile(fileName: string) {
    try {
      // Download file from Supabase Storage
      // const { data, error } = await supabase
      //   .storage
      //   .from('assets')
      //   //in this case the id might actually end up being the file name
      //   .download(fileName);
  
      if (error) {
        throw new Error(`Error downloading file: ${error.message}`);
      }
  
      // Convert data to a readable stream
      // Convert data to a File object
      const blob = new Blob([data]);
      const file = new File([blob], fileName);
  
      // Upload to OpenAI
      const uploadedFile = await openai.files.create({
        file: file,
        purpose: "assistants"
      });
      console.log(`file with ID: ${uploadedFile.id}`);
      return file;
    
    } catch (error) {
    if (error instanceof Error) {
      console.error("Error:", error.message);
    } else {
      console.error("Unexpected error:", error);
    }
    }
  }
  
