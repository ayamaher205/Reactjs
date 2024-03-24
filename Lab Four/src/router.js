import { Outlet, createBrowserRouter } from "react-router-dom"
import Products from "./pages/Products/Products"
import { Fragment } from "react"
import ResponsiveAppBar from './components/NavBar/NavBar'
import Login from './pages/Login/Login'
import SignUp from "./pages/SignUp/SignUp"
import ProductDetails from "./pages/ProductDetails/ProductDetails"
import Footer from "./components/Footer/Footer"
import Profile from './pages/Profile/Profile'
const LayOut = () => {
    return (
      <Fragment>
        <ResponsiveAppBar></ResponsiveAppBar>
        <Outlet></Outlet>
        <div style={{ height: "500px" }}></div>
        <Footer></Footer>
      </Fragment>
    );
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut />,
    children: [
      {
        path: "/",
        element: <Products />,
      },
      {
        path: "productdetails/:id",
        element: <ProductDetails />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "About Us",
        element: <Profile />,
      },
    ],
  },
]);

export default router;
