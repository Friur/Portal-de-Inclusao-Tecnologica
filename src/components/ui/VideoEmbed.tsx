import { Play } from "lucide-react";

interface VideoEmbedProps {
  videoId: string;
  title: string;
}

const VideoEmbed = ({ videoId, title }: VideoEmbedProps) => {
  return (
    <div className="my-8 bg-muted rounded-2xl p-4 md:p-6">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
          <Play className="w-4 h-4 text-secondary-foreground" fill="currentColor" />
        </div>
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      </div>
      <div className="video-embed">
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-xl"
        />
      </div>
    </div>
  );
};

export default VideoEmbed;
