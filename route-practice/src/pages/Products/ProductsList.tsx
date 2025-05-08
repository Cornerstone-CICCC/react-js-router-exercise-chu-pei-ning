import { useEffect, useState } from "react"
import type { Product } from "../../types/product.types"
import { Link } from "react-router-dom"
import { buttonVariants } from "@/components/ui/button"


const ProductsList = () => {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    const getProducts = async () => {
      const res = await fetch (`https://dummyjson.com/products`)
      const data = await res.json()
      setProducts(data.products)
    }
    getProducts()
  }, [])

  return (
    <div>
      <h2 className="text-2xl">Product List</h2>
      <ul>
        {products.map(p => (
          <li key={p.id}>
            <span>{p.title}</span>
            <Link to={`/product/${p.id}`} className={buttonVariants({ variant: "outline" })}>Veiw details</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProductsList