'use client';

import React from "react";
import SideNav from "./_components/SideNav";
import Header from "./_components/Header";
import { TotalUsageContext } from "../(context)/TotalUsageContext";

const layout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {

    const [totalUsage, setTotalUsage] = React.useState<Number>(0);

    return (
        <TotalUsageContext.Provider value={{ totalUsage, setTotalUsage }}>
            <div className="relative bg-purple-50 h-screen">
                <SideNav />

                <Header />

                {children}

            </div>
        </TotalUsageContext.Provider>
    );
};

export default layout;
