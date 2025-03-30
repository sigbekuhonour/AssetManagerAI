import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Book, Settings2 } from "lucide-react";
import Link from "next/link";
import { PDFSheetDemo, SettingsSheetDemo } from "./sheetPage";

export default function AppSidebar({getInputProps,getRootProps,uploadedFiles}) {
  return (
    <Sidebar className="basis-1/4">
      <SidebarContent className="bg-black">
        <SidebarGroup>
          <SidebarGroupLabel className="text-white text-left">
            Engineering assets AI
          </SidebarGroupLabel>
          <SidebarGroupContent className="pr-5">
            <SidebarMenu>
              <SidebarMenuItem key={"Uploaded PDFs"}>
                <SidebarMenuButton
                  asChild
                  className="hover:bg-neutral-700 active:bg-neutral-900"
                >
                  <div className="bg-black">
                    <Book color="white" />
                    <Link href={""}>
                      <PDFSheetDemo getInputProps={getInputProps} getRootProps={getRootProps} uploadedFiles={uploadedFiles}/>
                    </Link>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem key={"Settings"}>
                <SidebarMenuButton
                  asChild
                  className="hover:bg-neutral-700 active:bg-neutral-900"
                >
                  <div className="bg-black">
                    <Settings2 color="white" />
                    <Link href={""}>
                      <SettingsSheetDemo />
                    </Link>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

// export default function AppSidebar() {
//   return (
//     <div className="flex flex-col w-1/4 h-screen  align-top  bg-black">
//       <h1 className="font-semibold text-lg py-10 text-white">
//         {" "}
//         EngineeringAssetsAI
//       </h1>
//       <div>
//         <a className="flex flex-row justify-items-stretch" href="#">
//           <LucideHome color={"white"} size={30} />
//           <span className="text-lg align-middle text-white">Account</span>
//         </a>
//       </div>
//       <div>
//         <a className="flex flex-row justify-items-stretch" href="#">
//           <Book color={"white"} size={30} />
//           <span className="text-lg align-middle text-white">Uploaded PDF</span>
//         </a>
//       </div>
//       <div>
//         <a className="flex flex-row justify-items-stretch" href="#">
//           <Settings color={"white"} size={30} />
//           <span className="text-lg align-middle text-white">Settings</span>
//         </a>
//       </div>
//     </div>
//   );
// }
