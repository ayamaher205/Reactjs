import { BrowserRouter, RouterProvider, Routes, Route } from "react-router-dom";
import router from './router'
import "./App.css";
import Products from "./pages/Products/Products";

function App () {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
