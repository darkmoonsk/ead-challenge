import { useContext } from "react";
import Chapter from "./../models/Chapter";
import ChapterItem from "./ChapterItem";
import CourseContext from "@/contexts/CourseContext";

export default function ChapterList() {
  const { chapters } = useContext(CourseContext);
  return (
   <>
    {chapters.map((chapter: Chapter) => (
        <ChapterItem key={chapter.id} chapter={chapter} />
    ))}
   </>
  )
}
