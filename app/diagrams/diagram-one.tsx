"use client";
import Edge from "./edge";
import RectNode from "./node";
import { useMediaQuery } from "usehooks-ts";
const DiagramOne = () => {
  const isSmallScreen = useMediaQuery("(min-width: 600px)");
  const Nodes = ["Node one", " Node two", " Node three", " Node four"];
  const parentWidth = isSmallScreen ? 400 : 600;
  const totalHeight = Nodes.length * 46 + (Nodes.length - 1) * 30;

  return (
    <div className="grid place-items-center">
      <p>Diagram one</p>
      <div className={`w-[min(550px,100%)]    border border-red-500 px-5 py-5`}>
        <div
          className={` w-full flex items-center justify-center gap-0 `}
          style={{
            height: `${totalHeight}px`,
          }}
        >
          <div className="flex-1">
            <RectNode label="Main Node" />
          </div>
          <div className="[flex:0.5]  ">
            <Edge className="h-[2px]" />
          </div>
          <div className={`w-[2px] h-full py-[23px] `}>
            <div className="line w-full h-full bg-black"></div>
          </div>
          <div className="[flex:0.5] h-full flex flex-col justify-between py-[23px]">
            {Nodes.map((_, idx) => {
              return <Edge key={idx} />;
            })}
          </div>
          <div className="flex-1 h-full flex flex-col   justify-between ">
            {Nodes.map((node, idx) => {
              return <RectNode  label={node} key={idx} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default DiagramOne;
