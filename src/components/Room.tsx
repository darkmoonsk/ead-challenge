import ChapterList from "./ChapterList";
import Player from "./Player";
import Statistics from "./Statistics";
import { CourseProvider } from "./../contexts/CourseContext";



export default function Room() {
  return (
    <div className="flex">
      <div className="bg-zinc-800 w-96 h-screen overflow-auto">
          <ChapterList />
      </div>
      <div className="flex flex-col flex-1 justify-center items-center gap-4">
        <Statistics />
        <Player />
      </div>
    </div>
  )
}
