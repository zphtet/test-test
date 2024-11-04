import { cn } from "@/lib/utils";

type Props = {
  width?: number;
  height?: number;
  label: string;
  className?: string;
};

const RectNode: React.FC<Props> = ({ width, height, label, className }) => {
  return (
    <div
      className={cn(
        `px-5 py-3 border rounded-sm text-sm text-center`,
        className
      )}
    >
      <p>{label}</p>
    </div>
  );
};

export default RectNode;
