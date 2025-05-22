"use client"
import { supabase } from '@/lib/supabase'
import React, { useCallback, useContext, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { LevelContext } from './LevelContext'




export default function InputFile() {  
  const context = useContext(LevelContext);

  if (!context) {
    return <div>Error: LevelContext not found.</div>;
  }

  const { getRootProps, getInputProps, uploadedFiles } = context;

  return (
    <div>
      <div className="bg-white" {...getRootProps()}>
        <input {...getInputProps()} />
        <p className="text-center">Click to select PDF</p>
      </div>

      <div className="mt-4">
        <h3 className='text-white text-center'>Uploaded Files</h3>
        <ul>
          {uploadedFiles.map((file, index) => (
            <li key={index} className='text-white text-lg'>
              {file.path || file.name} {/* Adjust based on the structure of `data` returned by Supabase */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
