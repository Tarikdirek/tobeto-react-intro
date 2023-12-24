import "./App.css";
import Workshop from "./Workshop";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import UsingAxios from "./components/UsingAxios";
import UsingFetch from "./components/UsingFetch";

const router = createBrowserRouter([
  {
    path: "/axios",
    element: <UsingAxios></UsingAxios>,
  },
  {
    path: "/fetch",
    element: <UsingFetch></UsingFetch>,
  }
]);

function App() {


  return (
   <div className="container">
     <RouterProvider router={router} />
   </div>
  );
}

export default App;
