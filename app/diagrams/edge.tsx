import { cn } from "@/lib/utils";

const Edge: React.FC<{
  height?: number;
  className?: string;
}> = ({ height, className }) => {
  return (
    <div className={`h-[2px] pr-1  `}>
      <div
        className={cn(
          `h-[2px] edge bg-black relative before:content-[''] before:w-2 before:h-2 before:absolute before:bg-inherit before:-top-[3px] before:right-0`,
          className
        )}
      ></div>
    </div>
  );
};

export default Edge;
