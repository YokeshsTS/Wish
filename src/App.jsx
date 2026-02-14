import { useEffect, useState } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.scss";
import Loader from "./components/Loader";
import { AnimatePresence, motion } from "framer-motion";
import Layout from "./components/Layout";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate preload time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 sec smooth intro

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app">
      <AnimatePresence>{loading && <Loader />}</AnimatePresence>

      {!loading && <Layout />}
    </div>
  );
}

export default App;
