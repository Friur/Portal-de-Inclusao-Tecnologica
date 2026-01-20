interface PartCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

const PartCard = ({ imageSrc, title, description }: PartCardProps) => {
  return (
    <div className="glass-card rounded-xl overflow-hidden feature-card-hover group">
      <div className="relative h-40 overflow-hidden">
        <img
          src={imageSrc}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4 text-center">
        <h4 className="font-bold text-primary text-lg mb-1">{title}</h4>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
    </div>
  );
};

export default PartCard;
