import { supabase } from "./supabase"

 export const uploadTheFile = async (fileToUpload: File) => {
    console.log('Uploading file')
    const { data, error } = await supabase
      .storage
      .from('assets')
      .upload(fileToUpload.name, fileToUpload, {
        cacheControl: '3600',
        upsert: false
      })
  
    if (error) {
      console.error('Error uploading file:', error.message)
      return null
    }
  
    console.log('File uploaded:', data)
    return data
  }