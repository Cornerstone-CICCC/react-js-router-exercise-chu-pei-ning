import { Link } from "react-router-dom"

const Error = () => {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-2xl">Page Not Found!</h1>
      <Link to={'/'} className="border p-3 w-32 rounded-md hover:bg-black hover:text-white">Back to Home</Link>
    </div>
  )
}

export default Error