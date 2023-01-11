import React from "react";

const Layout: React.FC<{children: React.ReactNode}> = ({ children }) => {
    return (
        <>
            <nav className="relative container mx-auto p-6">
                {/* <div className="flex items-center justify-between">
                    <div className="pt-2">
                        <img src="img/logo.svg" alt="" />
                    </div>
                    <a href='#' className="hidden p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseLine hover:bg-brightRedLight md:block">Get Started</a>
                </div> */}
            </nav>
            {children}
            <div></div>
        </>
    );
}

export default Layout;