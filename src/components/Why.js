import React from "react";
import { WhyData } from "../shared/Data";
import Card from "./Card";

const WhyCard = ({ data }) => {
  return (
    <div className="border-2 w-[32%] border-gray-800 font-poppins rounded-xl m-1 p-4">
      <p className="text-2xl font-bold">{data.title}</p>
      <p className="text-xs text-gray-700 my-2">{data.description}</p>
      <p className="underline text-xs font-bold">Learn More</p>
    </div>
  );
};

const Why = () => {
  return (
    <Card>
      <>
        <p className="text-center my-4 font-poppins font-bold text-4xl mt-10">
          Why Buy from OLX?
        </p>
        <div className="flex justify-around flex-wrap">
          {WhyData.map((why) => (
            <WhyCard data={why} />
          ))}
        </div>
      </>
    </Card>
  );
};

export default Why;
