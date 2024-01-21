import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ThemeProvider } from "../ThemeProvider";
import SnapshotSummaryPage from "@/pages/snapshot-summary";

const BASE_PATH = "/backoffice-sample";

const router = createBrowserRouter([
  {
    path: BASE_PATH,
    element: <SnapshotSummaryPage />,
  },
]);

const App = () => {
  return (
    <ThemeProvider defaultTheme="light">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
