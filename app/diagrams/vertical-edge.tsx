import { cn } from "@/lib/utils";

const VerticalEdge: React.FC<{
  height?: number;
  className?: string;
}> = ({ height, className }) => {
  return (
    <div className={`h-full pt-1 `}>
      <div
        className={cn(
          `h-full w-[2px] edge-vertical bg-black relative before:content-[''] before:w-2 before:h-2 before:absolute before:bg-inherit before:-top-[3px] before:right-0`,
          className
        )}
      ></div>
    </div>
  );
};

export default VerticalEdge;
