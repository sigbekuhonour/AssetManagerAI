import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useDropzone } from "react-dropzone";

export default function InputFile() {
  const [desc, setDesc] = useState("");
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: {
      "application/pdf": [], // Only accept PDF files
    },
  });
  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));
  const uploadPDF = async (e) => {
    //connection to database
  };
  return (
    <div>
      <form
        className="flex flex-col items-center space-y-5"
        onSubmit={uploadPDF}
      >
        <div className="flex flex-row justify-start items-center space-x-3">
          <Label htmlFor="name" className="text-left text-base  text-white">
            Description
          </Label>
          <Input
            id="name"
            required
            className="col-span-3 text-white"
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <button {...getRootProps({ className: "dropzone " })}>
          <input {...getInputProps()} />
          <p className="text-white active:text-zinc-400  hover:text-zinc-300 animate-pulse px-7 w-full h-10 ">
            Drag & drop some files here, or click to select PDF files
          </p>
        </button>
        <button
          type="submit"
          className=" bg-white w-full h-15 rounded-lg  active:bg-neutral-600 border-dashed border-black border"
        >
          Upload PDF
        </button>
        <aside>
          <h4 className="text-white ">
            {files && files.length > 0
              ? "Files to upload"
              : "No files selected"}
          </h4>
          <ul className="text-white">{files}</ul>
        </aside>
      </form>
    </div>
  );
}
