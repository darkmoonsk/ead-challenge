import Chapter from "@/models/Chapter"
import LessonItem from "./LessonItem"
import { useContext } from "react";
import CourseContext from "@/contexts/CourseContext";

interface ChapterItemProps {
    chapter: Chapter
}

export default function ChapterItem({ chapter }: ChapterItemProps) {
  const { currentLesson } = useContext(CourseContext);

  return (
    <div>
        <div className="flex items-center gap-3 p-4 bg-zinc-900">
            <div className="
              flex justify-center items-center
              h-9 w-9 rounded-full bg-black border border-zinc-400
            ">
                {chapter.order}
            </div>
            <span>{chapter.title}</span>
        </div>
        <div className="p-4">
            {chapter.lessons.map((lesson) => (
                <LessonItem 
                  key={lesson.order} 
                  lesson={lesson} 
                  selected={lesson.order === currentLesson.order} 
                />
            ))}
        </div>
    </div>
  )
}
