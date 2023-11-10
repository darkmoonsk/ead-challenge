import Lesson from "./Lesson";

export default interface Chapter {
    id: number;
    title: string;
    order: number;
    lessons: Lesson[];
}