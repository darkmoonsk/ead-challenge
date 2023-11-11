import chapters from "@/constants/chapters";

export default function Player() {
  const currentLesson = chapters[0].lessons[0];
  return (
    <div
      className="
        flex flex-col justify-center items-center
        w-4/5 h-3/5 bg-zinc-700 rounded-lg p-3
    "
    >
      <span className="text-2xl">{currentLesson.title}</span>
      <div className="aspect-video h-full p-5">
        <iframe
          width="100%"
          height="100%"
          src={currentLesson.videoUrl}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
