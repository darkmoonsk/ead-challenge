import Lesson from "@/models/Lesson"
import LessonConclusion from "./LessonConclusion"
import { IconVideo } from "@tabler/icons-react"

interface LessonItemProps {
    lesson: Lesson
    selected: boolean
}

export default function LessonItem({ lesson, selected }: LessonItemProps) {
  return (
    <div className="flex items-center gap-2 py-1">
        <LessonConclusion concluded={false} onClick={() => console.log("baby")}/>
        <div className="flex flex-1 flex-col cursor-pointer">
            <span className={`
              ${selected && "text-yellow-400"}
            `}>
              {lesson.order}.  {lesson.title}
            </span>
            <span className="-mt-1 text-xs text-zinc-400 ">
              Duração de {lesson.duration / 60}m
            </span>
        </div>
        <IconVideo size={20} className="text-zinc-500" />
    </div>
  )
}
