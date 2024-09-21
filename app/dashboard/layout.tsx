'use client';

import React from "react";
import SideNav from "./_components/SideNav";
import Header from "./_components/Header";
import { TotalUsageContext } from "../(context)/TotalUsageContext";
import { UserSubscriptionContext } from "../(context)/UserSubscriptionContext";

const layout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {

    const [totalUsage, setTotalUsage] = React.useState<Number>(0);
    const [userSubscription, setUserSubscription] = React.useState<boolean>(false);

    return (
        <TotalUsageContext.Provider value={{ totalUsage, setTotalUsage }}>
            <UserSubscriptionContext.Provider value={{ userSubscription, setUserSubscription }}>
                <div className="relative bg-purple-50 h-screen">
                    <SideNav />

                    <Header />

                    {children}

                </div>
            </UserSubscriptionContext.Provider>
        </TotalUsageContext.Provider>
    );
};

export default layout;
