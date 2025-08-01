import { Link } from "react-router";

function PagenotFound() {
  return (
    <>
      <h1 className="flex justify-center items-center  w-full  py-2 font-semibold">
        Page Not Found
      </h1>
      <p className="flex justify-center font-semibold">Error found</p>
      <Link className="flex justify-center font-semi-bold text-blue-400" to = "/"> Go to Home Page</Link>
    </>
  );
}
export default PagenotFound;
