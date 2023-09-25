import { useQuery } from '@tanstack/react-query'
import { MyFetcher } from 'utils/fetcher'
import { BASE_URL } from 'config';
import { TypeMovie } from '../models/Movie';

export function useGetAllMovie(): TypeMovie {
  const { isLoading, error, data } = useQuery({
    queryKey: ['movie_data'],
    queryFn: () =>
      MyFetcher(`${BASE_URL}films`).then(
        (res) => res.json(),
      ),
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    cacheTime: Infinity,
  })

  if (data && data?.results) {
    const mm = data?.results.map((item: any, i: number) => (
      {
        ...item,
        ...{
          id: i,
          image: 'https://picsum.photos/200',
          price: Math.floor(Math.random() * (9) + 1)
        }
      }
    ))
    data.results = mm;
  }

  return { isLoading, error, data };
}