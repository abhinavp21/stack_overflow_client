import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    //component
    const [loginUser, setLoginUser] = useState({});

    const handleLogin = (obj) => {
        setLoginUser(obj)
    };

    return (
        <AppContext.Provider
            value={{
                loginUser,
                handleLogin,
                // isModalOpen,
                // openModal,
                // closeModal,
                // openSidebar,
                // closeSidebar,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

// function to be exported
export const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider };
