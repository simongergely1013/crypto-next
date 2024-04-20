import React from "react";
import { BarLoader } from "react-spinners";

const LoaderLandingPage = () => {
  return (
    <div className="flex justify-center items-center">
      <BarLoader width={800} height={6} color="#36d7b7" />
    </div>
  );
};

export default LoaderLandingPage;
