"use client";

import Circle from "./circle";
import FavouriteMusic from "./fav-music";
import FlexLayout from "./flex";
import Navigation from "./navigation";
import SentAni from "./sent";

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
    </div>
  );
};
export default LayoutAnimation;
