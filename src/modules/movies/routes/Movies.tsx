import { ListProduct } from "components/ListProduct";
import { useMovies } from "../context/MovieContext";
import { useEffect, useState } from "react";
import { TypeResult } from "../models/Movie";
import Loading from "components/Loading";

export default function Movies() {
  const movies = useMovies();
  const [results, setResults] = useState<Array<TypeResult>>([]);

  useEffect(() => {
    if (movies?.data) {
      setResults(movies?.data?.results);
    }
  }, [movies]);

  if (movies?.isLoading) return <Loading />;

  if (movies?.error) return <div>An error has occurred</div>;

  return (
    <div>
      <h1 className="text-3xl font-bold">Star Wars Movie Catalog</h1>
      {results.map((item, i) => (
        <div className="divide-y divide-slate-100" key={`movie_${i}`}>
          <ListProduct
            id={item?.id}
            title={item?.title}
            image={item?.image}
            description={item?.opening_crawl}
            price={item?.price}
            release_date={item?.release_date}
          />
        </div>
      ))}
    </div>
  );
}
