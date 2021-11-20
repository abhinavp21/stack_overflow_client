import React from "react";

const AppContext = React.createContext();

// const AppProvider = ({ children }) => {
//     //component
//     const [loginUser, setLoginUser] = useState(false);

//     return (
//         <AppContext.Provider
//             value={{
//                 loginUser,
//                 setLoginUser
//             }}
//         >
//             {children}
//         </AppContext.Provider>
//     );
// };

// function to be exported
// export const useGlobalContext = () => {
//     return useContext(AppContext);
// };

export { AppContext };
