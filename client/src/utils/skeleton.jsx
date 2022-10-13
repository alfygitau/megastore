import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonX = () => {
  return (
    <div>
      <Skeleton height={300} width={400} />
    </div>
  );
};

export default SkeletonX;
