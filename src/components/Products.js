import React from "react";
import { ProductsData } from "../shared/Data";
import Card from "./Card";

const ProductCard = ({ product }) => {
  return (
    <div className="w-[240px] font-poppins bg-gray-100 shadow-sm rounded-md m-1 flex justify-center items-center flex-col">
      <div className="h-[160px] bg-white p-3 overflow-hidden w-full">
        <img className="w-[90%] m-auto bg-contain" src={product.image} />
      </div>
      <div className="p-2 h-[120px]">
        <p className="my-2  text-md font-semibold">{product.title}</p>
        <p className="my-2 text-gray-600 text-xs">{product.description}</p>
        <p className="my-2 text-xs font-bold underline cursor-pointer">
          {" "}
          Buy now
        </p>
      </div>
    </div>
  );
};

const Products = () => {
  return (
    <Card>
      <div>
        <p className="text-center font-poppins font-bold text-4xl mt-10">
          Discover our Top Seller & Latest Products
        </p>
        <div className="flex flex-wrap mt-4 items-center">
          {ProductsData.map((product) => (
            <ProductCard product={product} />
          ))}
        </div>
        <div className='flex justify-center my-4 font-poppins'>
        <button className="my-1 text-center border-black border font-semibold text-black rounded-full px-2 py-1 text-xs">
          View More
        </button>
        </div>
      </div>
    </Card>
  );
};

export default Products;
