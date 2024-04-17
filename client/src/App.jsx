import { Outlet } from "react-router-dom";
import "./App.css";

import Top20Film from "./components/MovieBar/Top20Film";
import TopRated from "./components/MovieBar/TopRated";

import "./Global.css";
import NavBar from "./components/NavBar";


function App() {
  return (
    <div>

      <Top20Film />
      <TopRated/>

      <NavBar />
      <Outlet />

    </div>
  );
}

export default App;
