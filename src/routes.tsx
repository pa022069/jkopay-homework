// import { lazy } from 'react';
import {
  createBrowserRouter,
} from "react-router-dom";

import ProductListPage from '@/pages/ProductListPage';
import ProductItemPage from '@/pages/ProductItemPage';
// const ProductListPage = lazy(() => import('./pages/ProductListPage'))
// const ProductItemPage = lazy(() => import('./pages/ProductItemPage'))

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