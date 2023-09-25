import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { lazy, Suspense } from "react";
import { MoviesProvider } from "modules/movies/context/MovieContext";
import { CartProvider } from "modules/cart/context/CartContext";
import Loading from "components/Loading";

const Layout = lazy(() => import("components/Layout"));

const DetailMovie = lazy(() => import("modules/movies/routes/DetailMovie"));
const Movies = lazy(() => import("modules/movies/routes/Movies"));

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Movies />,
  },
  {
    path: "movie/:id",
    element: <DetailMovie />,
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MoviesProvider>
        <CartProvider>
          <Layout>
            <Suspense fallback={<Loading />}>
              <RouterProvider router={router} />
            </Suspense>
          </Layout>
        </CartProvider>
      </MoviesProvider>
    </QueryClientProvider>
  );
}

export default App;
