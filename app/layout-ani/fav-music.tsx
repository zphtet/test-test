import artistOne from "@/public/avatars/image-amyrobson.png";
import artistTwo from "@/public/avatars/image-juliusomo.png";
import artistThree from "@/public/avatars/image-maxblagun.png";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { useState } from "react";
const musics = [
  {
    img: artistOne,
    title: "Killing me softly",
    artist: "Frank Sinatra",
  },
  {
    img: artistTwo,
    title: "The harder they come",
    artist: "Jimmy Cliff",
  },
  {
    img: artistThree,
    title: "Hey Jude",
    artist: "The Beatles",
  },
];
const FavouriteMusic = () => {
  const [isExp, setIsExpand] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <div className="w-[300px] relative h-[550px] bg-gray-400/10 shadow-md rounded-lg border p-5 space-y-5">
      <div className="relative space-y-5 h-full">
        <div className="py-10 px-5 border bg-white rounded-lg space-y-2 text-center">
          <p className="text-2xl"> Trending Music</p>
          <button className="py-2 px-5 border rounded-full">Explore now</button>
        </div>
        <p className="text-xl">Your Favourite Songs</p>
        <div className="space-y-2">
          {musics.map((music, idx) => {
            let isExpand = isExp && idx === index;
            return (
              <motion.div
                layout
                // layoutId={idx.toString()}
                onClick={() => {
                  setIsExpand(true);
                  setIndex(idx);
                }}
                style={{
                  ...(isExpand && {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    zIndex: 10,
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    paddingTop: "50px",
                    gap: "20px",
                  }),
                }}
                className="music cursor-pointer flex items-center gap-2 bg-white py-2 px-5 rounded-xl"
              >
                <motion.div
                  layout
                  className="w-[40px] aspect-square rounded-full block"
                  style={{
                    ...(isExpand && {
                      width: "60px",
                    }),
                  }}
                >
                  <Image
                    src={music.img}
                    alt={"artist one"}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                {isExpand && (
                  <motion.div layout>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsExpand(false);
                      }}
                      className=" py-2 px-5 text-sm bg-black rounded-full text-white"
                    >
                      close
                    </button>
                  </motion.div>
                )}
                <motion.div
                  layout
                  style={{
                    ...(isExpand && {
                      textAlign: "center",
                    }),
                  }}
                >
                  <motion.p
                    layout
                    className="text-sm"
                    style={{
                      ...(isExpand && {
                        fontSize: "20px",
                      }),
                    }}
                  >
                    {music.title}
                  </motion.p>
                  <motion.p
                    layout
                    style={{
                      ...(isExpand && {
                        fontSize: "15px",
                      }),
                    }}
                    className="text-[10px] text-gray-400"
                  >
                    {music.artist}
                  </motion.p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FavouriteMusic;
