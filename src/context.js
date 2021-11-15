import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    //component
    const [loginUser, setLoginUser] = useState(false);

    const handleLogin = (e) => {
        setLoginUser(e.target.value)
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
