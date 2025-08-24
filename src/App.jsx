import './App.css'
import { useEffect } from "react";
import Portfolio from './Portfolio'
import { useLocation } from "react-router-dom"; // if using React Router
import { initGA, trackPage } from "./analytics";

function App() {
const location = useLocation();

  useEffect(() => {
    initGA();
  }, []);

  useEffect(() => {
    trackPage(location.pathname);
  }, [location]);

  return (
      <div className="App">
      <main>
        <Portfolio />
      </main>
    </div>
   
  )
}

export default App
