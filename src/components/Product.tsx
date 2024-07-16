import { Button, Image } from "@nextui-org/react";

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
    <article className="h-full flex flex-col">
      <Image src={image} alt={title} radius="sm" />
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-amber-300/70 text-xl/none font-semibold font-serif">
            {title}
          </h3>
          <p className="font-serif text-lg text-amber-200/60">${price}</p>
          <p className="text-amber-50/70 text-lg/none font-serif font-extralight my-4">
            {description}
          </p>
        </div>
        <Button
          radius="sm"
          className="self-end my-3 bg-amber-400 font-light text-md"
          onClick={handleAddToCart}
        >
          Add to Cart
        </Button>
      </div>
    </article>
  );
}
