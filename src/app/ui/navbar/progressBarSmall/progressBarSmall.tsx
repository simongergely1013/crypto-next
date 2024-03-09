import React from "react";

interface ProgressBarProps {
    className: string;
    width: string;
}

const styles = {
    outerBar: "w-14 h-1.5 relative bg-slate-500 rounded",
    innerBar: "h-full absolute rounded",
};

const ProgessBarSmall = ({className, width}: ProgressBarProps) => {
    return(
        <div className={styles.outerBar}>
            <div className={className} style={{width: width}}></div>
        </div>
    );
};

export default ProgessBarSmall;