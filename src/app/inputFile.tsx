import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function InputFile() {
  return (
    <div className="grid w-screen max-w-sm items-center gap-1.5">
      <Label htmlFor="fileSelector" className="text-white">
        Select PDFs
      </Label>
      <Input id="fileSelector" type="file" className="bg-white" />
    </div>
  );
}
