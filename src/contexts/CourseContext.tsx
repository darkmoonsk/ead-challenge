import Chapter from "@/models/Chapter";
import { createContext, useState } from "react"
import chaptersMock from "./../constants/chapters";

interface CourseContextProps {
    chapters: Chapter[];
}

const CourseContext = createContext<CourseContextProps>({ chapters: [] });

export function CourseProvider({children}: any) {
    const [chapters, setChapters] = useState(chaptersMock);

    return (
        <CourseContext.Provider value={{
            chapters
        }}>
            {children}
        </CourseContext.Provider>
    )
}

export default CourseContext;