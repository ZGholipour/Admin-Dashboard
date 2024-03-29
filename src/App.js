import routes from "./routes";
import { useRoutes } from "react-router-dom";
import TopBar from "./components/topbar/TopBar";
import SideBar from "./components/sideBar/SideBar";
import "./App.css";
import Home from "./pages/Home/Home";

function App() {
  let router = useRoutes(routes);
  return (
    <>
      <TopBar />
      <div className="container">
        <SideBar />
        {router}
      </div>
    </>
  );
}

export default App;
