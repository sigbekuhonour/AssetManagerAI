import PromptArea from "./promptArea";
import AppSidebar from "./sideBar";
import "dotenv/config";

export default function Home() {
  return (
    <div className="flex flex-row w-screen h-screen justify-items-start space-x-7 ">
      <AppSidebar />
      <PromptArea />
    </div>
  );
}
