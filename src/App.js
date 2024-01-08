import { Outlet, useLocation } from "react-router";
import Navbar from "./Components/Header/Header";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer";
import { useEffect } from "react";

function App() {
  const path = useLocation();

  // scroll to top on change of route
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);
  return (
    <div className="App">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
