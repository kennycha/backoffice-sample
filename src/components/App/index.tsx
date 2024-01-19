import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ThemeProvider } from "../ThemeProvider";
import SnapshotSummaryPage from "@/pages/snapshot-summary";

const router = createBrowserRouter([
  {
    path: "/",
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
