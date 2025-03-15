"use client"
import { supabase } from '@/lib/supabase'
import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'

const uploadTheFile = async (fileToUpload: File) => {
  console.log('Uploading file')
  const { data, error } = await supabase
    .storage
    .from('assets')
    .upload(fileToUpload.name, fileToUpload, {
      cacheControl: '3600',
      upsert: false
    })
    console.log('Inside uploadTheFile')
    console.log(data)
}


export default function InputFile() {
  const onDrop = useCallback((acceptedFiles: any[]) => {
    acceptedFiles.forEach((file: File) => {
      uploadTheFile(file)
    })
    
  }, [])
  const {getRootProps, getInputProps} = useDropzone({onDrop, accept: {
    "application/pdf": ['.pdf']
  }})

  return (
    <div className="bg-white"{...getRootProps()}>
      <input {...getInputProps()} />
      <p className="text-center">Click to select PDF</p>
    </div>
  )
}
