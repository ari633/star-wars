import { useEffect, useState } from "react";
import { useMovies } from "../context/MovieContext";
import { useCartDispatch } from "modules/cart/context/CartContext";
import { useParams } from 'react-router-dom';
import { TypeResult } from "../models/Movie";

export default function DetailMovie() {
  let { id } = useParams();

  const cartDispatch = useCartDispatch();
  const movies = useMovies();  

  const [movie, setMovie] = useState<TypeResult>();

  useEffect(() => {
    if (movies?.data) {
      const result = movies?.data?.results.find((item) => item.id === Number(id))
      setMovie(result);
    }
  }, [id, movies]);

  const handleAddToCart = () => {
    cartDispatch({
      id: movie?.id,
      title: movie?.title,
      image: movie?.image,
      price: movie?.price,
      qty: 1,
      type: 'added'
    })
  }

  if (!movie) {
    return (
      <div>
        Movie not found 
      </div>
    )
  }

  return (
    <div className="grid grid-cols-2 gap-4">
      <div>
        <img src={movie.image} alt="" width="100%" />
      </div>
      <div className="pr-6">
        <h1 className="font-bold text-xl text-black-500">{movie.title}</h1>
        <p className="mb-5">
          {movie.opening_crawl}
        </p>
        <div className="flex justify-between">
          <div className="font-bold">
            Price: ${movie.price}
          </div>
          <button className="h-10 px-6 font-semibold rounded-md border bg-green-500 border-slate-200 text-white" onClick={handleAddToCart} data-testid="add-to-cart">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}