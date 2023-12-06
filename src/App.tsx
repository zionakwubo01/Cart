
import { RouterProvider } from "react-router-dom";
import { mainrouter } from "./Router/mainrouter";
import { Provider } from "react-redux";
import { store } from "./store";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


function App() {
  const client = new QueryClient()
  return (
    <div>
      <Provider store={store}>
        <QueryClientProvider client={client}>
          <RouterProvider router={mainrouter} />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </Provider>
    </div>
  );
}

export default App;
