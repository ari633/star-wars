import { ReactNode, createContext, useContext } from 'react';
import { useGetAllMovie } from "../services/useMovie"
import { TypeMovie } from '../models/Movie';

type ProviderProps = {
  children: ReactNode;
};

const MoviesContext = createContext<TypeMovie | null>(null);

export function MoviesProvider ({ children }: ProviderProps)  {

  const { isLoading, error, data } = useGetAllMovie();

  const valueProvider: TypeMovie = {
    isLoading, error, data
  }

  return (
    <MoviesContext.Provider value={valueProvider}>
      {children}
    </MoviesContext.Provider>
  )
}

export function useMovies() {
  return useContext(MoviesContext);
}