import { createContext } from "react";
import useFirebase from "../hooks/useFirebase";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const userInfo = useFirebase();
    return (

        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>

    );
};

export default AuthProvider;
