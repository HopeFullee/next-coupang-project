import { CartItem } from "@/types/CartItem";

const CartItem = ({ cartName, cartPrice, cartQuantity }: CartItem) => {
  return (
    <div className="flex justify-between py-5 gap-30 px-15 under:whitespace-nowrap under:overflow-hidden under:text-ellipsis sm:text-20 border-b-1">
      <p className="w-[50%]">{cartName}</p>
      <p className="w-[35%]">$ {cartPrice}</p>
      <p className="w-[15%] text-right">{cartQuantity}</p>
    </div>
  );
};

export default CartItem;
