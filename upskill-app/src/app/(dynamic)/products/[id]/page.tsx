import Image from "next/image"

type ProductsPageProps = {
  params: {
    id: string
  }
}

async function getData() {
  const res = await fetch("https://dog.ceo/api/breeds/image/random")

  if (!res.ok) {
    throw new Error("Failed to fetch data")
  }

  return res.json()
}

const ProductsPage = async ({ params }: ProductsPageProps) => {
  const data = await getData()

  return (
    <div className="px-[200px] py-[200px] text-5xl font-bold">
      <h1>Product {params.id}</h1>
      <Image src={data.message} alt="A random dog" width={500} height={500} />
    </div>
  )
}

export default ProductsPage
