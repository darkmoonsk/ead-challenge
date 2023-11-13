import CourseContext from "@/contexts/CourseContext";
import Statistic from "./Statistic";
import { useContext } from "react";

export default function Statistics() {
  const {
    numberOfLessons,
    numberOfLessonsConcluded,
    totalDuration,
    totalDurationConcluded,
    percentageConcluded,
  } = useContext(CourseContext);

  return (
    <div
      className="
        flex justify-around items-center
        bg-zinc-700 rounded-lg
        w-4/5 h-24
    ">
      <Statistic value={numberOfLessons} text="Qtd Aulas" />
      <Statistic value={numberOfLessonsConcluded} text="Aulas Concluidas" />
      <Statistic value={totalDuration} text="Duração Total" />
      <Statistic value={totalDurationConcluded} text="Duração Concluida" />
      <Statistic value={percentageConcluded} text="Perc. Concluida" />
    </div>
  );
}
