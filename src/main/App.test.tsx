import { render, screen, waitFor } from "@testing-library/react";
import {
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";
import { routerConfig } from './router';

test("renders Home", async () => {
  const router = createMemoryRouter(routerConfig, {
    initialEntries: ["/"],
  });

  render(<RouterProvider router={router} />);
  
  await waitFor(() => {
    expect(screen.getByText(/Star Wars Movie Catalog/i)).toBeInTheDocument()
  })
});
