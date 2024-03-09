import React from "react";
import ThemeIcon from "../icons/themeIcon";

const styles = {
    main: "w-[48px] h-[48px] flex justify-center items-center bg-[#1F1934] border border-slate-700 rounded"
};

const ThemeSwitch = () => {
    return(
        <div className={styles.main}><ThemeIcon/></div>
    );
};

export default ThemeSwitch;