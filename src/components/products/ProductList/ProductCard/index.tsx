"use client";
import { useState } from "react";
import { Product } from "@/types/Product";
import Image from "next/image";

interface Props extends Product {
  calcValue: number;
}

const ProductCard = ({ name, stock, price, thumbnail, calcValue }: Props) => {
  const [quantity, setQuantity] = useState(0);

  const increaseQuantityClick = () => {
    if (quantity < 30) setQuantity((prev) => prev + 1);
  };

  const reduceQuantityClick = () => {
    if (quantity > 0) setQuantity((prev) => prev - 1);
  };

  return (
    <li className="p-20 leading-relaxed rounded-md bg-white/20">
      <h6 className="font-bold text-18 md:text-20">{name}</h6>
      <Image
        src={thumbnail}
        alt="product-image"
        className="py-15"
        priority={true}
      />
      <p className="font-semibold md:text-18">
        stock: {stock.toLocaleString()}
      </p>
      <p className="font-semibold md:text-18">
        price: {price.toLocaleString()}
      </p>
      <div className="mt-20 gap-15 flex-col-center under:w-full all:rounded-md under:font-bold under:tracking-wide">
        <button className="p-6 bg-indigo-500 text-15 md:text-16">
          REVIEWS
        </button>
        <div className="flex gap-10 under:p-6 under:bg-blue-500 text-15 md:text-16 under:w-full">
          <div className="flex text-center justify-evenly under:w-30">
            <button onClick={reduceQuantityClick}>-</button>
            <p>{quantity}</p>
            <button onClick={increaseQuantityClick}>+</button>
          </div>
          <button>ADD CART</button>
        </div>
      </div>
    </li>
  );
};

export default ProductCard;
