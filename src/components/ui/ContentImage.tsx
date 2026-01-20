import { cn } from "@/lib/utils";

interface ContentImageProps {
  src: string;
  alt: string;
  className?: string;
}

const ContentImage = ({ src, alt, className }: ContentImageProps) => {
  return (
    <figure className="my-6">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={cn(
          "w-full max-w-3xl mx-auto h-auto rounded-xl shadow-lg object-cover",
          className
        )}
      />
    </figure>
  );
};

export default ContentImage;
