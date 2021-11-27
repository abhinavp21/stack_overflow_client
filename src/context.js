import React, { useState, useContext } from "react";
const AppContext = React.createContext();
// const ObjectId = require("mongodb").ObjectId;

const AppProvider = ({ children }) => {
    //component
    const [loginUser, setLoginUser] = useState();
    // { id: "", username: "" }
    return (
        <AppContext.Provider
            value={{
                loginUser,
                setLoginUser
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
