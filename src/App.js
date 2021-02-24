import "./App.css";
import Table from "./components/Table/Table";
import { QueryClient, QueryClientProvider } from "react-query";
// const Table = lazy(() =>
//   import("./components/Table/Table.js" /*webpackChunkName: "table" */)
// );

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Table />
    </QueryClientProvider>
  );
}

export default App;
