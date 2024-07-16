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
      <Image src={image} alt={title} radius="sm" />
      <div className="p-4">
        <h3 className="text-amber-300/80 text-xl/none font-semibold font-serif">
          {title}
        </h3>
        <p className="font-serif text-lg text-amber-200/60">${price}</p>
        <p className="text-amber-50/70 text-medium/none font-serif">
          {description}
        </p>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </article>
  );
}
