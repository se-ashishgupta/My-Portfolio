import React, { createContext, useContext, useState } from 'react';

const MyContext = createContext();

export const ActiveLinkContext = ({ children }) => {
    const [activeUrl, setActiveUrl] = useState(location.pathname);

    return (
        <MyContext.Provider value={{ activeUrl, setActiveUrl }} >{children}</MyContext.Provider>
    );
};

export const useMyContext = () => {
    return useContext(MyContext);
};
