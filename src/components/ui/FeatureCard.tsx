import { Link } from "react-router-dom";
import { ArrowRight, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  title: string;
  description: string;
  imageSrc: string;
  linkTo: string;
  linkText: string;
  icon: LucideIcon;
  delay?: number;
}

const FeatureCard = ({
  title,
  description,
  imageSrc,
  linkTo,
  linkText,
  icon: Icon,
  delay = 0,
}: FeatureCardProps) => {
  return (
    <div
      className={cn(
        "glass-card rounded-2xl overflow-hidden feature-card-hover group animate-slide-up"
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={imageSrc}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
        <div className="absolute bottom-4 left-4">
          <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center shadow-lg">
            <Icon className="w-6 h-6 text-accent-foreground" />
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4 leading-relaxed">{description}</p>
        <Link
          to={linkTo}
          className="btn-primary inline-flex items-center gap-2 group/link"
        >
          {linkText}
          <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

export default FeatureCard;
