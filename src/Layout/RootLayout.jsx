import { Outlet, useNavigation } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import LoadingSpinner from "../Components/LoadingSpinner";
import { useState } from "react";
import { CartContext } from "../Providers/CartContext";

const RootLayout = () => {
  const navigaton = useNavigation();
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <Navbar />
      {navigaton.state === "loading" ? (
        <LoadingSpinner />
      ) : (
        <main className="min-h-[calc(100vh-285px)] max-w-7xl mx-auto">
          <Outlet />
        </main>
      )}
      <Footer />
    </CartContext.Provider>
  );
};
export default RootLayout;
