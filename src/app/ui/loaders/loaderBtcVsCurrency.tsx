import React from "react";
import { BarLoader } from "react-spinners";

const LoaderBtcVsCurrency = () => {
  return (
    <div className="flex items-center">
      <BarLoader width={200} height={6} color="#36d7b7" />
    </div>
  );
};

export default LoaderBtcVsCurrency;
