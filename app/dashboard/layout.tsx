import React from "react";
import SideNav from "./_components/SideNav";
import Header from "./_components/Header";

const layout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div className="relative">
                <SideNav />

            {/* <Header/> */}
            
                {children}
        
        </div>
    );
};

export default layout;
