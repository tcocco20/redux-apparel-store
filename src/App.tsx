import Header from "./components/Header.tsx";
import Shop from "./components/Shop.tsx";
import Product from "./components/Product.tsx";
import { DUMMY_PRODUCTS } from "./dummy-products.ts";

function App() {
  return (
    <main className="bg-yellow-950">
      <div className="container mx-auto px-40 pb-8">
        <Header />
        <Shop>
          {DUMMY_PRODUCTS.map((product) => (
            <li
              className="w-[calc(33%-18px)] bg-stone-500/50 rounded-lg shadow-2xl"
              key={product.id}
            >
              <Product {...product} />
            </li>
          ))}
        </Shop>
      </div>
    </main>
  );
}

export default App;
