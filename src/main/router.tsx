import { lazy } from "react";
const DetailMovie = lazy(() => import("modules/movies/routes/DetailMovie"));
const Movies = lazy(() => import("modules/movies/routes/Movies"));

export const routerConfig = [
  {
    path: "/",
    element: <Movies />,
  },
  {
    path: "movie/:id",
    element: <DetailMovie />,
  },
];
