import { Lightbulb } from "lucide-react";
import { Button } from "./button";
import { toast } from "sonner";

interface TipButtonProps {
  message: string;
  label?: string;
}

const TipButton = ({ message, label = "Dica Importante" }: TipButtonProps) => {
  const showTip = () => {
    toast.info(message, {
      duration: 6000,
      icon: <Lightbulb className="w-5 h-5 text-yellow-500" />,
    });
  };

  return (
    <Button
      onClick={showTip}
      className="btn-primary gap-2 mt-6"
      variant="default"
    >
      <Lightbulb className="w-5 h-5" />
      {label}
    </Button>
  );
};

export default TipButton;
