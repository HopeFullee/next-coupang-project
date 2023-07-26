import ProductCard from "./ProductCard";

const ProductData = [
  {
    name: "product #01",
    stock: 200,
    price: 10000,
  },
  {
    name: "product #02",
    stock: 500,
    price: 20000,
  },
  {
    name: "product #03",
    stock: 1100,
    price: 5000,
  },
  {
    name: "product #04",
    stock: 800,
    price: 70000,
  },
  {
    name: "product #05",
    stock: 2000,
    price: 3000,
  },
  {
    name: "product #06",
    stock: 300,
    price: 15000,
  },
  {
    name: "product #07",
    stock: 300,
    price: 15000,
  },
];

const ProductList = () => {
  return (
    <article className="px-20 mx-auto max-w-900">
      <ul className="grid gap-40 sm:grid-cols-2 sm:gap-30">
        {ProductData.map((v) => {
          return <ProductCard {...v} />;
        })}
      </ul>
    </article>
  );
};

export default ProductList;
