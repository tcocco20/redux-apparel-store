import { useState } from "react";

import Cart from "./Cart.tsx";
import { Button, Image } from "@nextui-org/react";

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
      <header className="flex justify-between content-center flex-wrap">
        <div className="flex gap-6 content-center">
          <Image width={80} src="logo.png" alt="Elegant model" />
          <h1 className="text-5xl/normal font-medium text-amber-300 font-serif uppercase">
            Elegant Redux
          </h1>
        </div>
        <Button
          className="text-lg bg-amber-300"
          radius="sm"
          onClick={handleOpenCartClick}
        >
          Cart (0)
        </Button>
      </header>
    </>
  );
}
