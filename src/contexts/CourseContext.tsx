import Chapter from "@/models/Chapter";
import { createContext, useState } from "react"
import chaptersMock from "./../constants/chapters";
import Lesson from "@/models/Lesson";
import CourseStatistics from "@/models/CourseStatistics";

interface CourseContextProps {
    chapters: Chapter[];
    currentLesson: Lesson;
    numberOfLessons: number;
    numberOfLessonsConcluded: number;
    totalDuration: string;
    totalDurationConcluded: string;
    percentageConcluded: string;
    lessonSelection: (lesson: Lesson) => void;
    changeLessonConclusion: (lesson: Lesson) => void;
}

const CourseContext = createContext<CourseContextProps>({ } as any);

export function CourseProvider({children}: any) {
    const [chapters, setChapters] = useState(chaptersMock);
    const [currentLesson, setCurrentLesson] = useState(chaptersMock[0].lessons[0]);

    const courseStatistics = new CourseStatistics(chapters);
    
    function lessonSelection(lesson: Lesson) {
      setCurrentLesson(lesson);
    }

    function changeLessonConclusion(selectedLesson: Lesson) {
      const updatedChapters = chapters.map((chapter: Chapter) => {
        const updatedLesson = chapter.lessons.map(lesson => {
          return lesson.order === selectedLesson.order 
            ? {...lesson, conclusion: !(lesson.conclusion ?? false)} : lesson;
        })

        return {...chapter, lessons: updatedLesson};
      })

      setChapters(updatedChapters);
    }

    return (
        <CourseContext.Provider value={{
            chapters,
            currentLesson,
            lessonSelection,
            changeLessonConclusion,
            get numberOfLessons() { return courseStatistics.numberOfLessons() },
            get numberOfLessonsConcluded() { return courseStatistics.lessonsConcluded() },
            get totalDuration() { return courseStatistics.totalDuration() },
            get totalDurationConcluded() { return courseStatistics.totalDurationConcluded() },
            get percentageConcluded() { return courseStatistics.percentageConcluded() }
        }}>
            {children}
        </CourseContext.Provider>
    )
}

export default CourseContext;