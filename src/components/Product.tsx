import { Image } from "@nextui-org/react";

type ProductProps = {
  id: string;
  image: string;
  title: string;
  price: number;
  description: string;
};

export default function Product({
  image,
  title,
  price,
  description,
}: ProductProps) {
  function handleAddToCart() {}

  return (
    <article>
      <Image src={image} alt={title} />
      <div>
        <div>
          <h3>{title}</h3>
          <p className="product-price">${price}</p>
          <p>{description}</p>
        </div>
        <p className="product-actions">
          <button onClick={handleAddToCart}>Add to Cart</button>
        </p>
      </div>
    </article>
  );
}
