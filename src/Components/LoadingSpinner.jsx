import { PacmanLoader } from "react-spinners";

const LoadingSpinner = () => {
  return (
    <div className="flex min-h-[calc(100vh-285px)] justify-center items-center">
      <PacmanLoader
        size={30}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};
export default LoadingSpinner;
