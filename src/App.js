import { Outlet, useLocation } from "react-router";
import Footer from "./Components/Footer";
import { useEffect } from "react";
import Header from "./Components/Header/Header";

function App() {
  const path = useLocation();

  // scroll to top on change of route
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);
  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
