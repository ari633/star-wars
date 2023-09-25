import { render, screen } from "@testing-library/react";
import Movies from "modules/movies/routes/Movies";
import { MoviesContext } from "modules/movies/context/MovieContext";
import { BrowserRouter } from 'react-router-dom'

test("loads and displays movies", async () => {
  render(
    <BrowserRouter>
      <MoviesContext.Provider
        value={{
          isLoading: false,
          error: null,
          data: { count: 1, next: null, previous: null, results: [
            {
              title: "Title Test",
              episode_id: '1',
              opening_crawl: "Desc Test",
              image: "Img Test",
              price: 1,
              release_date: "Release Date Test",
              id: 1
            }
          ]},
        }}
      >
        <Movies />
      </MoviesContext.Provider>
    </BrowserRouter>
  );
  expect(screen.getByTestId('title')).toContainHTML('Title Test')
});
