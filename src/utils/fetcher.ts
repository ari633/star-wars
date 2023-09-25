export function MyFetcher(input: string): Promise<Response> {
  return fetch(input)
}