"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import Link from "next/link";
import { CreditCardIcon, User2Icon } from "lucide-react";
import InputFile from "./inputFile";

export function PDFSheetDemo({getInputProps,getRootProps,uploadedFiles}) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <span className="text-white">Uploaded PDFs</span>
      </SheetTrigger>
      <SheetContent className="bg-black">
        <SheetHeader>
          <SheetTitle className="text-white ">Uploaded PDFs</SheetTitle>
          <SheetDescription className="text-white pb-6">
            This is where PDFs are uploaded for processing
          </SheetDescription>
        </SheetHeader>
        <InputFile getInputProps={getInputProps} getRootProps={getRootProps} uploadedFiles={uploadedFiles} />
      </SheetContent>
    </Sheet>
  );
}

export function SettingsSheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <span className="text-white">Settings</span>
      </SheetTrigger>
      <SheetContent className="bg-black">
        <SheetHeader>
          <SheetTitle className="text-white ">Settings</SheetTitle>
          <SheetDescription className="text-white">
            My asset manager model settings
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <Link href={""}>
            <div className="flex flex-row space-x-5">
              <User2Icon color="WHITE" />
              <h1 className="text-white">Profile </h1>
            </div>
          </Link>
          <Link href={""}>
            <div className="flex flex-row space-x-5">
              <CreditCardIcon color="WHITE" />
              <h1 className="text-white">Billing </h1>
            </div>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}
