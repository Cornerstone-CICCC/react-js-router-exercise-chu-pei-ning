import { useEffect, useState } from "react"
import type { Product } from "../../types/product.types"
import { Link } from "react-router-dom"

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
      <h2>Product List</h2>
      <ul>
        {products.map(p => (
          <li key={p.id}>
            <span>{p.title}</span>
            <Link to={`/product/${p.id}`}>Veiw details</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProductsList