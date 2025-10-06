import { Outlet, useNavigation } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import LoadingSpinner from "../Components/LoadingSpinner";

const RootLayout = () => {
  const navigaton = useNavigation();

  return (
    <div>
      <Navbar />
      {navigaton.state === "loading" ? (
        <LoadingSpinner />
      ) : (
        <main className="min-h-[calc(100vh-285px)]">
          <Outlet />
        </main>
      )}
      <Footer />
    </div>
  );
};
export default RootLayout;
