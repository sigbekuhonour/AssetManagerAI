"use client"
import { uploadTheFile } from "@/lib/uploadFile";
import PromptArea from "./promptArea";
import AppSidebar from "./sideBar";
import "dotenv/config";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { supabase } from "@/lib/supabase";


export default  function Home() {


  //for every single file there has to be a url along with it
  const [uploadedFiles, setUploadedFiles] = useState<any[]>([])

  //you need to find a way to check for the contents of the storage but this is a client
  //component and you cant use async in client components so God damn it think


  //  const { supabaseFiles, error } = await supabase
  //   .storage
  //   .from('assets')
  //   .list("", {
  //     limit: 100,
  //     offset: 0,
  //     sortBy: { column: 'name', order: 'asc' },
  //   })
  //   if(!supabaseFiles||supabaseFiles.length === 0){
  //     console.log("No files in storage")
  //   }
  //   else{
  //     setUploadedFiles(supabaseFiles);
  //   }



  //you got work to do here boy
  
  
    const onDrop = useCallback((acceptedFiles: File[]) => {
      acceptedFiles.forEach(async (file: File) => {
        const uploadedFile = await uploadTheFile(file)
        if (uploadedFile) {
          setUploadedFiles((prevFiles) => [...prevFiles, uploadedFile])
        }
      })
    }, [])
  
    const { getRootProps, getInputProps } = useDropzone({
      onDrop,
      accept: {
        "application/pdf": ['.pdf']
      }
    })
  return (
    <div className="flex flex-row w-screen h-screen justify-evenly ">
      {/* ///uploaded files are needed in the input file component which is a child component of app sidebar */}
      <AppSidebar getInputProps={getInputProps} getRootProps={getRootProps} uploadedFiles={uploadedFiles} />
      {/* i need the uploaded files text */}
      {/* how to extract text from a  pdf file on a storage bucket */}

      {/* pass the uploaded files from this top component to the backend */}
      <PromptArea uploadedFilesList={uploadedFiles} />
    </div>
  );
}
