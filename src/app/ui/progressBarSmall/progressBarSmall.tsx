import React from "react";
import { styles } from "./progressBarSmall.styles";

interface ProgressBarProps {
  className: string;
  width: string;
}

const ProgessBarSmall = ({ className, width }: ProgressBarProps) => {
  return (
    <div className={styles.outerBar}>
      <div className={className} style={{ width: width }}></div>
    </div>
  );
};

export default ProgessBarSmall;
