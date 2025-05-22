"use client"
import { uploadTheFile } from "@/lib/uploadFile";
import PromptArea from "./promptArea";
import AppSidebar from "./sideBar";
import "dotenv/config";
import { createContext, useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";

interface LevelContextType {
  getInputProps: ReturnType<typeof useDropzone>['getInputProps'];
  getRootProps: ReturnType<typeof useDropzone>['getRootProps'];
  uploadedFiles: any[];
}

export const LevelContext = createContext<LevelContextType | null>(null)

export default  function Home() {

  
  //for every single file there has to be a url along with it
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
      <LevelContext.Provider value={{getInputProps,getRootProps,uploadedFiles}}>
      <AppSidebar/>
      <PromptArea/>
      </LevelContext.Provider>
    </div>
  );
}
