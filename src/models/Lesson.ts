export default interface Lesson {
    order: number;
    title: string;
    duration: number;
    videoUrl: string;
    conclusion?: boolean;
}