import { lazy } from 'react';
import {
  createBrowserRouter,
} from "react-router-dom";

const ProductListPage = lazy(() => import('./pages/ProductListPage'))
const ProductItemPage = lazy(() => import('./pages/ProductItemPage'))

const routes = createBrowserRouter([
  {
    path: "/",
    element: <ProductListPage />,
  },
  {
    path: "/:id",
    element: <ProductItemPage />,
  },
]);

export default routes;