import Image from "next/image"
import ProductCard from "./components/ProductCard"

async function getData() {
  const res = await fetch("https://dog.ceo/api/breeds/image/random")

  if (!res.ok) {
    throw new Error("Failed to fetch data")
  }

  return res.json()
}

const ProductsPage = async () => {
  const data = await getData()

  return (
    <div>
      <h1 className="px-[200px] py-[200px] text-5xl font-bold">
        Heres some products
      </h1>
      <div className="flex flex-row px-[200px]">
        <ProductCard product={"1"} image={data.message} />
        <ProductCard product={"2"} image={data.message} />
        <ProductCard product={"3"} image={data.message} />
      </div>
    </div>
  )
}

export default ProductsPage
