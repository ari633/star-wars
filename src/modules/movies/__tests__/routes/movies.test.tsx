import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Movies from "modules/movies/routes/Movies";
import DetailMovie from "modules/movies/routes/DetailMovie";
import { MoviesContext } from "modules/movies/context/MovieContext";
import { CartProvider } from "modules/cart/context/CartContext";
import { BrowserRouter } from "react-router-dom";
import { ShoppingCart } from "components/ShoppingCart";

const Wrapper = ({ children }: any) => (
  <BrowserRouter>
    <MoviesContext.Provider
      value={{
        isLoading: false,
        error: null,
        data: {
          count: 1,
          next: null,
          previous: null,
          results: [
            {
              title: "Title Test",
              episode_id: "1",
              opening_crawl: "Desc Test",
              image: "Img Test",
              price: 1,
              release_date: "Release Date Test",
              id: 1,
            },
          ],
        },
      }}
    >
      <CartProvider>{children}</CartProvider>
    </MoviesContext.Provider>
  </BrowserRouter>
);

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    id: "1",
  }),
}));

describe("test movie router", () => {
  test("loads and displays movies", async () => {
    render(
      <Wrapper>
        <Movies />
      </Wrapper>
    );
    expect(screen.getByTestId("title")).toContainHTML("Title Test");
  });

  test("loads and displays detail movie", async () => {
    const view = render(
      <Wrapper>
        <DetailMovie />
        <ShoppingCart />
      </Wrapper>
    );
    await userEvent.click(screen.getByTestId("add-to-cart"));
    await userEvent.click(screen.getByTestId("add-to-cart"));

    expect(screen.getByTestId("total-qty")).toHaveTextContent("2");
    expect(screen.getByTestId("total-price")).toHaveTextContent("2");
  });
});
