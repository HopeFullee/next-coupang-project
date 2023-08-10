import CartItem from "@/components/cart/CartItem";

const Cart = () => {
  return (
    <section className="flex-col-center gap-50">
      <h4 className="font-semibold pt-50 text-32">CART</h4>
      <ul className="w-full gap-20 under:w-full max-w-800 flex-col-center">
        <li>
          <CartItem
            cartName="premium earphone"
            cartPrice={2000000}
            cartQuantity={100}
          />
        </li>
        <li>
          <CartItem
            cartName="monintoring speaker"
            cartPrice={20000}
            cartQuantity={52}
          />
        </li>
        <li>
          <CartItem
            cartName="gaming monitor"
            cartPrice={200000000}
            cartQuantity={8}
          />
        </li>
      </ul>
    </section>
  );
};

export default Cart;
