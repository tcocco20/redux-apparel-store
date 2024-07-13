import { type ReactNode } from "react";

type ShopProps = {
  children: ReactNode;
};

export default function Shop({ children }: ShopProps) {
  return (
    <section className="my-8">
      <h2 className="text-2xl font-serif text-neutral-300 uppercase font-medium opacity-70 my-5">
        Elegant Clothing For Everyone
      </h2>

      <ul id="products">{children}</ul>
    </section>
  );
}
