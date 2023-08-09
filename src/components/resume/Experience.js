import React from "react";
import { motion } from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div className="">


        <div>
          <div className="flex flex-col gap-4">
            <p className="text-sm text-designColor tracking-[4px]">Since 2023</p>
            <h2 className="text-4xl font-bold">Members Reviews</h2>
          </div>
          <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
            <ResumeCard
              title="Mehjabin Liza"
              subTitle="Begum Badrunnessa Govd. Girls' College."
              postLink="https://www.facebook.com/permalink.php?story_fbid=pfbid0BdFi9b4CDp8eiJmUi5xx86wanNHd5sLTSccBpabjvCrswqQbYFhBybPduquVAMvSl&id=100094559876038"
              des="❤️‍🔥❤️‍🩹❣️💕💞💓💗💖💘💝❤️‍🔥❤️‍🩹❣️💕💞💓💗💖💘💝❤️‍🔥❤️‍🩹❣️💕💞💓💗💖💘💝❤️‍🔥❤️‍🩹❣️💕💞💓💗💖💘💝❤️‍🔥❤️‍🩹❣️💕💞💓💗💖💘💝❤️‍🔥❤️‍🩹❣️💕💞💓💗💖💘💝"
            />
            <ResumeCard
              title="Tarin Jebin"
              subTitle="Begum Badrunnessa Govd. Girls' College."
              postLink="https://www.facebook.com/permalink.php?story_fbid=pfbid035K53EMzShDaE4t4RSwcPutZ2QeTPoKzKskEydyd6oXdU3d4tJH6U4jTkgS4Xr4ytl&id=61550063480757"
              des="❤️‍🔥❤️‍🔥❤️‍🔥❤️‍🔥❤️‍🔥"
            />
            <ResumeCard
              title="Anisa Jaman Aksa"
              subTitle="Begum Badrunnessa Govd. Girls' College."
              postLink="https://www.facebook.com/permalink.php?story_fbid=pfbid02Znz1191ceMMDNPFgYJhHCwfnFP8hbcyngNyTQozzJkQapZLVpvFhU9X2zaFe3uRhl&id=100095663913435"
              des="😘😘😘😘😘😘😘"
            />
          </div>
        </div>
        <div>
          <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
            <ResumeCard
              title="Jannatul Sabni"
              subTitle="Begum Badrunnessa Government Girls' College"
              postLink="https://www.facebook.com/permalink.php?story_fbid=pfbid08F1BFPoBwUyh5x67xCwYhRfbcCj133r4dzHGjGRMV4jV3fs1fPSQSkusYKyXDiMAl&id=61550100260847"
              des="💚💚💚💚💚💚💚"
            />
            <ResumeCard
              title="Neha Islam Mow"
              subTitle="Begum Badrunnessa Government Girls' College"
              postLink="https://www.facebook.com/permalink.php?story_fbid=pfbid037GkvjLfq8EwqvZDku6APe23CXQr69XWjDfLnZ3d7f6E2k727JKnC2uNkt25trKhdl&id=100095513197567"
              des="💟💟💟💟💟💟💟"
            />
            <ResumeCard
              title="Tamanna Tammu"
              subTitle="Alampur Baliapara School & College"
              postLink="https://www.facebook.com/permalink.php?story_fbid=pfbid0TEAkdf9erRwocF9stahzvbKLScTfWuKXrtPj7rNpgXR7vSj45c5sWMospaTeEsTal&id=100095292459920"
              des="💘💘💘💘💘💘💘"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
