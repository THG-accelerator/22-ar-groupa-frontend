import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";

//pages
import Home from "./pages/Home";
import Desks from "./pages/Desks";
import Chairs from "./pages/Chairs";
import Sofas from "./pages/Sofas";
import NotFound404 from "./pages/NotFound404";

//layouts
import RootLayout from "./layouts/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="desks" element={<Desks />} />
      <Route path="chairs" element={<Chairs />} />
      <Route path="sofas" element={<Sofas />} />
      <Route path="*" element={<NotFound404 />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
