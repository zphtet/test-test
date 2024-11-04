import { cn } from "@/lib/utils";

const Edge: React.FC<{ height?: number; className?: string }> = ({
  height,
  className,
}) => {
  return (
    <div
      className={cn(
        `h-[2px] bg-black relative before:content-[''] before:w-2 before:h-2 before:absolute before:bg-orange-600 before:-top-[3px] before:right-0 before:rounded-full`,
        className
      )}
    ></div>
  );
};

export default Edge;
