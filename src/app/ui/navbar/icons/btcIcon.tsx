import { SiBitcoinsv } from "react-icons/si";
import { useAppSelector } from "@/app/lib/hooks";
import React from "react";

const BtcIcon = () => {
    const {isDark} = useAppSelector((state) => state.theme);

    return(
        <SiBitcoinsv className="w-[20px] h-[20px]" fill={isDark ? "white" : "#424286"}/>
    );
}; 

export default BtcIcon;