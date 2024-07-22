import { useCartSelector } from "../store/hooks";

export default function CartItems() {
  const cartItems = useCartSelector((state) => state.cart.items);

  const formattedTotalPrice = cartItems
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2);

  function handleAddToCart(item) {}

  function handleRemoveFromCart(item) {}
  return (
    <div id="cart">
      <p>No items in cart!</p>

      <ul id="cart-items">
        {cartItems.map((item) => {
          const formattedPrice = `$${item.price.toFixed(2)}`;

          return (
            <li key={item.id}>
              <div>
                <span>{item.title}</span>
                <span> ({formattedPrice})</span>
              </div>
              <div className="cart-item-actions">
                <button onClick={() => handleRemoveFromCart(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleAddToCart(item)}>+</button>
              </div>
            </li>
          );
        })}
      </ul>

      <p id="cart-total-price">
        Cart Total: <strong>${formattedTotalPrice}</strong>
      </p>
    </div>
  );
}
