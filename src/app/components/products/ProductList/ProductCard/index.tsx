type Props = {
  name: string;
  stock: number;
  price: number;
};

const ProductCard = ({ name, stock, price }: Props) => {
  return (
    <li className="p-20 leading-relaxed rounded-md bg-white/20">
      <h6 className="font-bold text-18 md:text-20">{name}</h6>
      <p className="font-semibold md:text-18">
        stock: {stock.toLocaleString()}
      </p>
      <p className="font-semibold md:text-18">
        price: {price.toLocaleString()}
      </p>
      <div className="mt-20 gap-15 flex-col-center under:p-6 under:w-full under:rounded-md under:font-bold under:tracking-wide">
        <button className="bg-indigo-500 text-15 md:text-16">REVIEWS</button>
        <button className="bg-blue-500 text-15 md:text-16">ADD CART</button>
      </div>
    </li>
  );
};

export default ProductCard;