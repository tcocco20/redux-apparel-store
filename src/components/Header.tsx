import { useState } from "react";

import Cart from "./Cart.tsx";
import { Image } from "@nextui-org/react";

export default function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  function handleOpenCartClick() {
    setCartIsVisible(true);
  }

  function handleCloseCartClick() {
    setCartIsVisible(false);
  }

  return (
    <>
      {cartIsVisible && <Cart onClose={handleCloseCartClick} />}
      <header className="flex justify-between content-center">
        <div className="flex gap-6 content-center">
          <Image width={80} src="logo.png" alt="Elegant model" />
          <h1 className="text-5xl font-bold text-yellow-400">Elegant Redux</h1>
        </div>
        <button onClick={handleOpenCartClick}>Cart (0)</button>
      </header>
    </>
  );
}
