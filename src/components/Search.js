import React from "react";
import { ChipData } from "../shared/Data";
import Card from "./Card";

const Chip = ({ text }) => {
  return (
    <div className="m-1 px-2 py-1 text-gray-600 rounded-full text-xxs border border-gray-500">
      {text}
    </div>
  );
};

const Search = () => {
  return (
    <Card>
      <div className="flex items-center justify-center flex-col">
        <p className="text-center font-poppins font-bold text-4xl mt-10">
          Looking for something else?
        </p>
        <div className='w-[40%] m-auto'>
          <input
            className="mt-8 mb-3 border outline-none border-gray-500 rounded-full p-2 w-full"
            placeholder="&#8981; Search Keyword"
          />
          <div className="flex flex-wrap justify-center">
            {ChipData.map((data, index) => (
              <Chip text={data} key={index} />
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Search;
