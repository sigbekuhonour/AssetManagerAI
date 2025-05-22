import { createContext } from "react";
import { useDropzone } from "react-dropzone";

export const LevelContext = createContext<LevelContextType | null>(null)
interface LevelContextType {
  getInputProps: ReturnType<typeof useDropzone>['getInputProps'];
  getRootProps: ReturnType<typeof useDropzone>['getRootProps'];
  uploadedFiles: any[];
}