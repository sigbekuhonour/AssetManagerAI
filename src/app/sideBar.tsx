import { Book, LucideHome, Settings } from "lucide-react";

// const items = [
//   {
//     title: "Home",
//     url: "#",
//     icon: Home,
//   },
//   {
//     title: "Uploaded PDF's",
//     url: "#",
//     icon: BookImage,
//   },
//   {
//     title: "Settings",
//     url: "#",
//     icon: Settings,
//   },
// ];

// function AppSideBarMenuItem({ title, url }) {
//   return (
//     <div>
//       <a href={url} className="flex flex-row pl-5">
//         <HomeIcon className="" />
//         <span className="text-base text-black font-light px-8">{title}</span>
//       </a>
//     </div>
//   );
// }
export default function AppSidebar() {
  return (
    <div className="flex flex-col w-1/4 h-screen  align-top  bg-black">
      <h1 className="font-semibold text-lg py-10 text-white">
        {" "}
        EngineeringAssetsAI
      </h1>
      <div>
        <a className="flex flex-row justify-items-stretch" href="#">
          <LucideHome color={"white"} size={30} />
          <span className="text-lg align-middle text-white">Account</span>
        </a>
      </div>
      <div>
        <a className="flex flex-row justify-items-stretch" href="#">
          <Book color={"white"} size={30} />
          <span className="text-lg align-middle text-white">Uploaded PDF</span>
        </a>
      </div>
      <div>
        <a className="flex flex-row justify-items-stretch" href="#">
          <Settings color={"white"} size={30} />
          <span className="text-lg align-middle text-white">Settings</span>
        </a>
      </div>
    </div>
  );
}
