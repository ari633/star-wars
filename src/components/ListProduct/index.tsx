import { Link } from "react-router-dom";


type PropsListProduct  = {
  id: number,
  title: string,
  image: string,
  description: string,
  price: number,
  release_date: string
}

export function ListProduct({
  id,
  title,
  image,
  description,
  price,
  release_date
}: PropsListProduct) {
  return (
  <article className="flex items-start space-x-6 p-6 ">
    <img src={image} alt="" width="88" height="88" className="flex-none rounded-md bg-slate-100" />
    <div className="min-w-0 relative flex-auto">
      <Link to={`movie/${id}`}>
        <span className="font-bold pr-10 text-green-500 underline">{title}</span>
      </Link>
      <p>Release Date {release_date}</p>
      <p className="py-2">
        {description.substring(0, 110)}...
      </p>
      <p>
        Price: ${price}
      </p>
    </div>
  </article>
  )
}