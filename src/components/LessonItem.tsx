import Lesson from "@/models/Lesson"
import LessonConclusion from "./LessonConclusion"
import { IconVideo } from "@tabler/icons-react"
import { useContext } from "react";
import CourseContext from "@/contexts/CourseContext";

interface LessonItemProps {
    lesson: Lesson
    selected: boolean
}

export default function LessonItem({ lesson, selected }: LessonItemProps) {
  const { lessonSelection, changeLessonConclusion } = useContext(CourseContext);

  return (
    <div className="flex items-center gap-2 py-1">
        <LessonConclusion concluded={lesson.conclusion ?? false} onClick={() => changeLessonConclusion(lesson)}/>
        <div className="flex flex-1 flex-col cursor-pointer"
          onClick={() => lessonSelection(lesson)}
        >
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
