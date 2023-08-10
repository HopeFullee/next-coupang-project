import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky top-0 z-30 flex items-center w-full px-40 bg-white/20 backdrop-filter backdrop-blur-3xl py-25">
      <h1 className="font-semibold text-32">
        <Link href={"/"}>HopeFresh</Link>
      </h1>
      <nav>
        <ul className="flex pl-40 mt-5 text-22 gap-30">
          <li>
            <Link href={"/products"}>Products</Link>
          </li>
          <li>
            <Link href={"/cart"}>Cart</Link>
          </li>
          <li>
            <Link href={"/contact"}>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
