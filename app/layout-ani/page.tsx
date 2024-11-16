"use client";

import Circle from "./circle";
import FavouriteMusic from "./fav-music";
import FlexLayout from "./flex";
import MotionPresence from "./motion-presence";
import Navigation from "./navigation";
import Numbers from "./numbers";
import SentAni from "./sent";
import StickyScroll from "./sticky-scroll";

const LayoutAnimation = () => {
  return (
    <div>
      <p>Layout Animation</p>
      <SentAni />
      <div className="py-10 px-20">
        <FlexLayout />
      </div>
      <Circle />
      <div className="px-10 py-10">
        <Navigation />
      </div>

      <div className="p-10 flex items-center justify-center">
        <FavouriteMusic />
      </div>
      <div>
        <StickyScroll />
      </div>
      <div>
        <MotionPresence />
      </div>
      <div>
        <Numbers />
      </div>
    </div>
  );
};
export default LayoutAnimation;
