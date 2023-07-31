import ProductCard from "./ProductCard";
import { Product } from "@/types/Product";
import productImage01 from "/public/assets/products-image/food0.png";
import productImage02 from "/public/assets/products-image/food1.png";
import productImage03 from "/public/assets/products-image/food2.png";

const ProductData: Product[] = [
  {
    name: "product #01",
    stock: 200,
    price: 10000,
    thumbnail: productImage01,
  },
  {
    name: "product #02",
    stock: 500,
    price: 20000,
    thumbnail: productImage02,
  },
  {
    name: "product #03",
    stock: 1100,
    price: 5000,
    thumbnail: productImage03,
  },
  {
    name: "product #04",
    stock: 800,
    price: 70000,
    thumbnail: productImage01,
  },
  {
    name: "product #05",
    stock: 2000,
    price: 3000,
    thumbnail: productImage01,
  },
  {
    name: "product #06",
    stock: 300,
    price: 15000,
    thumbnail: productImage01,
  },
  {
    name: "product #07",
    stock: 300,
    price: 15000,
    thumbnail: productImage01,
  },
];

const ProductList = () => {
  return (
    <article className="px-20 mx-auto max-w-900">
      <ul className="grid gap-40 sm:grid-cols-2 sm:gap-30">
        {ProductData.map((product, idx) => (
          <ProductCard
            key={idx}
            {...product}
            calcValue={product.price + product.stock}
          />
        ))}
      </ul>
    </article>
  );
};

export default ProductList;
