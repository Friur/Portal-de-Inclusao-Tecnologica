import { Check } from "lucide-react";

interface InfoListProps {
  items: string[];
  ordered?: boolean;
}

const InfoList = ({ items, ordered = false }: InfoListProps) => {
  const ListTag = ordered ? "ol" : "ul";

  return (
    <ListTag className="space-y-3 my-4">
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-3">
          <span className="flex-shrink-0 w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center mt-0.5">
            {ordered ? (
              <span className="text-sm font-bold text-secondary">{index + 1}</span>
            ) : (
              <Check className="w-3.5 h-3.5 text-secondary" />
            )}
          </span>
          <span className="text-foreground leading-relaxed">{item}</span>
        </li>
      ))}
    </ListTag>
  );
};

export default InfoList;
