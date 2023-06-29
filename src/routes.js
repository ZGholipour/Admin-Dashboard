import Home from "./pages/Home/Home";
import NewUser from "./pages/NewUser/NewUser";
import UserList from "./pages/UserList/UserList";
import Products from "./pages/Products/Products";

let routes = [
  { path: "/", element: <Home /> },
  {
    path: "/users",
    element: <UserList />,
  },
  { path: "/newUser", element: <NewUser /> },
  { path: "/product", element: <Products /> },
];
export default routes;
