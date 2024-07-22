import { Button } from "@nextui-org/react";
import { addToCart, removeFromCart, type CartItem } from "../store/cart-slice";
import { useCartDispatch, useCartSelector } from "../store/hooks";

export default function CartItems() {
  const cartItems = useCartSelector((state) => state.cart.items);
  const dispatch = useCartDispatch();

  const formattedTotalPrice = cartItems
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2);

  function handleAddToCart(item: CartItem) {
    dispatch(addToCart(item));
  }

  function handleRemoveFromCart(itemId: string) {
    dispatch(removeFromCart(itemId));
  }
  return (
    <div className="flex flex-col">
      {cartItems.length === 0 && <p>No items in cart!</p>}

      {cartItems.length > 0 && (
        <ul>
          {cartItems.map((item) => {
            const formattedPrice = `$${item.price.toFixed(2)}`;

            return (
              <li
                key={item.id}
                className="bg-amber-200/40 p-2 rounded flex justify-between mb-2 font-serif"
              >
                <div>
                  <span>{item.title}</span>
                  <span> ({formattedPrice})</span>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="light"
                    color="warning"
                    className="text-black p-3 w-2 min-w-0 text-base"
                    onClick={() => handleRemoveFromCart(item.id)}
                  >
                    -
                  </Button>
                  <span>{item.quantity}</span>
                  <Button
                    size="sm"
                    variant="light"
                    color="warning"
                    className="text-black p-3 w-2 min-w-0 text-base"
                    onClick={() => handleAddToCart(item)}
                  >
                    +
                  </Button>
                </div>
              </li>
            );
          })}
        </ul>
      )}

      <p id="cart-total-price" className="self-end mb-3">
        Cart Total: <strong>${formattedTotalPrice}</strong>
      </p>
    </div>
  );
}
