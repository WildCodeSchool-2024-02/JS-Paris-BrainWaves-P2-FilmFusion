import { Outlet } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import "./Global.css";

function App() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default App;
