import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PageLoading from "@components/PageLoading";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import routes from "./routes";
import "./index.css";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={<PageLoading />}>
          <RouterProvider router={routes} />
        </Suspense>
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
