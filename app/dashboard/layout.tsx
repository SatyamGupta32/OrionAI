'use client';

import React from "react";
import SideNav from "./_components/SideNav";
import Header from "./_components/Header";
import { TotalUsageContext } from "../(context)/TotalUsageContext";
import { UserSubscriptionContext } from "../(context)/UserSubscriptionContext";
import { UpdateCreditUsageContext } from "../(context)/UpdateCreditUsageContext";

const layout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {

    const [totalUsage, setTotalUsage] = React.useState<Number>(0);
    const [userSubscription, setUserSubscription] = React.useState<boolean>(false);
    const [updateCreditUsage, setUpdateCreditUsage] = React.useState<any>()
    const [isOpen, setIsOpen] = React.useState(false);
    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    }

        return (
            <TotalUsageContext.Provider value={{ totalUsage, setTotalUsage }}>
                <UserSubscriptionContext.Provider value={{ userSubscription, setUserSubscription }}>
                    <UpdateCreditUsageContext.Provider value={{ updateCreditUsage, setUpdateCreditUsage }}>
                        <div className="relative bg-purple-50 h-screen">
                            <SideNav isOpen={isOpen} toggleSidebar={toggleSidebar} />

                            <Header toggleSidebar={toggleSidebar} />

                            {children}

                        </div>
                    </UpdateCreditUsageContext.Provider>
                </UserSubscriptionContext.Provider>
            </TotalUsageContext.Provider>
        );
    };

    export default layout;
