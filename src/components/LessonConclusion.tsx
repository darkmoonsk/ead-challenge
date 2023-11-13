import { IconCheck } from "@tabler/icons-react";

interface LessonConclusionProps {
    concluded: boolean;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function LessonConclusion({ concluded, onClick }: LessonConclusionProps) {
  return (
    <div>
        <button className={`
            flex justify-center items-center
            w-6 h-6 rounded-full border border-zinc-400
            ${concluded ? 'bg-green-500' : 'bg-zinc-800'}
        `}
        onClick={onClick}
        >
            {concluded && <IconCheck size={18} stroke={3} />}
        </button>
    </div>
  )
}
