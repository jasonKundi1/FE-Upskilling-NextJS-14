type ProductsPageProps = {
  params: {
    id: string
  }
}

const ProductsPage = ({ params }: ProductsPageProps) => {
  return (
    <div className="px-[200px] py-[200px] text-5xl font-bold">
      <h1>Product {params.id}</h1>
    </div>
  )
}

export default ProductsPage
