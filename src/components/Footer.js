import React from "react";
import { serviceNames, features, ProductsServices, Shop } from "../shared/Data";

const List = ({ data }) => {
  return <li className="text-xs my-2 text-gray-500">{data}</li>;
};

const Footer = () => {
  return (
    <div>
      <div className="font-poppins h-[60vh] flex justify-around border-y border-y-gray-500">
        <div className="border-r-gray-500 w-1/5 border-r     p-2">
          <p className="text-lg font-bold">Shop</p>
          <ul>
            {Shop.map((service) => (
              <List data={service} />
            ))}
          </ul>
        </div>
        <div className="border-r-gray-500 w-1/5 border-r     p-2">
          <p className="text-lg font-bold">Features</p>
          <ul>
            {features.map((service) => (
              <List data={service} />
            ))}
          </ul>
        </div>
        <div className="border-r-gray-500 w-1/5 border-r     p-2">
          <p className="text-lg font-bold">Product Services</p>
          <ul>
            {ProductsServices.map((service) => (
              <List data={service} />
            ))}
          </ul>
        </div>
        <div className="border-r-gray-500 w-1/5 border-r     p-2">
          <p className="text-lg font-bold">Sustaniability</p>
          <ul>
            {serviceNames.map((service) => (
              <List data={service} />
            ))}
          </ul>
        </div>
        <div className="w-1/5 p-2">
          <p className="text-lg font-bold">Sustaniability</p>
          <ul>
            {serviceNames.map((service) => (
              <List data={service} />
            ))}
          </ul>
        </div>
      </div>
      <p className='text-xs p-2'>Developed with love</p>
    </div>
  );
};

export default Footer;
