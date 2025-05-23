import { useEffect, useState } from "react"
import type { Product } from "../../types/product.types"
import { useParams } from "react-router-dom"

const ProductDetail = () => {
  const [product, setProduct] = useState<Product | null>(null)
  const { id } = useParams()

  useEffect(() => {
    setProduct(null)
    const getProductById = async () => {
      const res = await fetch (`https://dummyjson.com/products/${id}`)
      const data = await res.json()
      setProduct(data)
    }
    getProductById()
  }, [id])

  return (
    <div>
      <h2 className="text-2xl">Product ID: {id}</h2>
      <ul>
        <li>{product?.title}</li>
        <img className="max-w-sm" src={product?.images} alt="" />
        <li>{product?.description}</li>
        <li>{product?.price}</li>
      </ul>
    </div>
  )
}

export default ProductDetail