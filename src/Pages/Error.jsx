import { Link } from "react-router";

const Error = () => {
  return (
    <div className="flex items-center justify-center flex-col h-[600px]">
      <p>Something is worng</p>
      <Link to="/" className="btn btn-ghost font-bold text-xl mt-2">
        Go Back Home
      </Link>
    </div>
  );
};
export default Error;
