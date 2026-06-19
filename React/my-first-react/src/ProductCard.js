import ProductCard from "./ProductCard";

function App() {
  const product = {
    name: "Laptop",
    description: "A powerful laptop for coding",
    price: 799.99,
  };

  return (
    <div>
      <h1>Product Store</h1>
      <ProductCard product={product} />
    </div>
  );
}

export default App;