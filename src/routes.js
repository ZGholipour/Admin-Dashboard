import Home from "./pages/Home/Home";
import NewUser from "./pages/NewUser/NewUser";
import UserList from "./pages/UserList/UserList";
import Products from "./pages/Products/Products";
import Product from "./pages/Product/product";

let routes = [
  { path: "/", element: <Home /> },
  {
    path: "/users",
    element: <UserList />,
  },
  { path: "/newUser", element: <NewUser /> },
  { path: "/product", element: <Products /> },
  { path: "/product/:productID", element: <Product /> },
];
export default routes;
