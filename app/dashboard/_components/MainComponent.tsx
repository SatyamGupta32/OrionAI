import { useState } from 'react';
import Header from './Header';
import SideNav from './SideNav';

const MainComponent = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Header toggleSidebar={toggleSidebar} />
            <SideNav isOpen={isOpen} toggleSidebar={toggleSidebar} />
        </>
    );
};

export default MainComponent;
