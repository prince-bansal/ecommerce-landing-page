import React from "react";
import { ChooseData } from "../shared/Data";
import Card from "./Card";

const ChooseCard = ({ data }) => {
  return (
    <div className={`${data.bg} w-3/12 m-2 p-3 rounded-lg`}>
      <div className="h-[100px] p-2 flex items-center justify-center flex-col">
        <p className="text-md font-semibold h-[80px] text-center">{data.title}</p>
        <button className="my-1 text-center border-black border text-white bg-black rounded-full px-3 py-1 text-xs">
          Buy Now
        </button>
      </div>
      <img src={data.image} />
    </div>
  );
};

const Choose = () => {
  return (
    <Card>
      <p className="text-center font-poppins font-bold text-4xl mt-10">
        Help me Choose
      </p>
      <div className="flex my-4">
        {ChooseData.map((data, index) => (
          <ChooseCard key={index} data={data} />
        ))}
      </div>
    </Card>
  );
};

export default Choose;
