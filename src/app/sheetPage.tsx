"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { InputFile } from "./inputFile";
import { useState } from "react";
import Link from "next/link";
import { CreditCardIcon, User2Icon } from "lucide-react";

export function PDFSheetDemo() {
  const [desc, setDesc] = useState("");
  return (
    <Sheet>
      <SheetTrigger asChild>
        <span className="text-white">Uploaded PDFs</span>
      </SheetTrigger>
      <SheetContent className="bg-black">
        <SheetHeader>
          <SheetTitle className="text-white ">Uploaded PDFs</SheetTitle>
          <SheetDescription className="text-white">
            This is where PDFs are uploaded for processing
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4 space-x-5">
            <Label htmlFor="name" className="text-left  text-white">
              Description
            </Label>
            <Input
              id="name"
              value={desc}
              className="col-span-3 text-white"
              onChange={(e) => setDesc(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <InputFile />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit" className="text-white">
              Save changes
            </Button>
          </SheetClose>
        </SheetFooter>
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
