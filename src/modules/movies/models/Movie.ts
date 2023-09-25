export type TypeResult = {
  title: string,
  episode_id: string,
  opening_crawl: string,
  image: string,
  price: number,
  release_date: string,
  id: number
}

type TypeData = {
  count: number,
  next: null,
  previous: null,
  results: Array<TypeResult>
}

export type TypeMovie = {
  isLoading: boolean,
  error: string | unknown,
  data: TypeData,
}