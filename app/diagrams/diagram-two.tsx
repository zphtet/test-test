import { cn } from "@/lib/utils";
import RectNode from "./node";
import Edge from "./edge";
import VerticalEdge from "./vertical-edge";

const DiagramTwo = () => {
  const Nodes = [
    "Node one",
    "Node two",
    "Node three",
    "Node four",
    "Node five",
    "Node six",
  ];
  const arrowHeight = 80;
  const nodeWidth = 104;
  return (
    <div className="flex flex-col items-center">
      <p className="text-center">Diagram Two</p>
      <div className="w-[min(800px,100%)] px-5 py-5 border border-red-500">
        <div className="nodes flex justify-between items-center">
          {Nodes.map((node, idx) => {
            return <RectNode label={node} key={idx} />;
          })}
        </div>
        <div
          className={cn(`arrows  flex justify-between`)}
          style={{
            height: `${arrowHeight}px`,
            paddingInline: `${nodeWidth / 2}px`,
          }}
        >
          {Nodes.map((node, idx) => {
            return <VerticalEdge />;
          })}
        </div>
        <div
          className={cn(`w-full`)}
          style={{
            paddingInline: `${nodeWidth / 2}px`,
          }}
        >
          <div className="line w-full h-[2px] bg-black"></div>
        </div>
        <div
          className="arrow flex items-center justify-center"
          style={{
            height: `${arrowHeight}px`,
          }}
        >
          <VerticalEdge />
        </div>
        <div className="main-node flex items-center justify-center">
          <RectNode label="Main Node" />
        </div>
      </div>
    </div>
  );
};
export default DiagramTwo;
