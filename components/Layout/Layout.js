import React from 'react';
import MainNavigation from "./MainNavigation/MainNavigation";

const Layout = ({children}) => {
    console.log(children)

    return (
        <>
            <MainNavigation />
            <main>{children}</main>
        </>
    );
};

export default Layout;