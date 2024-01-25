'use client';
import { usePathname } from "next/navigation";
import React from "react";

const PortfolioIcon = () => {
    const pathname = usePathname();
    return(
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill={pathname === "/portfolio" ? "white" : "none"}>
<path d="M21.5 12L12.5 18L3.5 12M21.5 16L12.5 22L3.5 16M21.5 8L12.5 14L3.5 8L12.5 2L21.5 8Z" stroke="white" stroke-opacity="0.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    )
};

export default PortfolioIcon;