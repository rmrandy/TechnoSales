import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import LoadingComponent from "./Pages/Loader";

const Layout = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      {loading && <LoadingComponent />}
      {!loading && children}
    </>
  );
};

export default Layout;
