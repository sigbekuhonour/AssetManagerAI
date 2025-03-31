"use client"
import { uploadTheFile } from "@/lib/uploadFile";
import PromptArea from "./promptArea";
import AppSidebar from "./sideBar";
import "dotenv/config";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";


export default function Home() {
  //you got work to do here boy
  const [uploadedFiles, setUploadedFiles] = useState<any[]>([])
  
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
      <PromptArea />
    </div>
  );
}
