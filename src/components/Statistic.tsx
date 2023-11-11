
interface StatisticProps {
    text: string;
    value: number | string;
}

export default function Statistic({ text, value }: StatisticProps) {
  return (
    <div className="flex flex-col items-center">
        <span className="text-4xl font-black">{value}</span>
        <span className="text-sm bg-zinc-400">{text}</span>
    </div>
  )
}
