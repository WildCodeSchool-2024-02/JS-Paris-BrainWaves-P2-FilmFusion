import { Outlet } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import "./Global.css";



function App() {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
}

export default App;
