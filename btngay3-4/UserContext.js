import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const logout = () => setIsLoggedIn(false);
    const login = () => setIsLoggedIn(true);

    return (
        <UserContext.Provider value={{ isLoggedIn, setIsLoggedIn, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};
