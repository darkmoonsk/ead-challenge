import Statistic from "./Statistic";


export default function Statistics() {
  return (
    <div className="
        flex justify-around items-center
        bg-zinc-700 rounded-lg
        w-4/5 h-24
    ">
        <Statistic value={10} text="Qtd Aulas"/>
        <Statistic value={5} text="Aulas Concluidas"/>
        <Statistic value="2h 30m" text="Duração Total"/>
        <Statistic value="1h 24m" text="Duração Concluida"/>
        <Statistic value="56%" text="Perc. Concluida"/>
    </div>
  )
}
