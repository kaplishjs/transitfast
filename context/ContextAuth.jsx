import { useContext, useState, createContext } from "react";

 const APIContext = createContext();

 function ContextProvider({ children }) {
    
  const getAuth =  typeof window !== "undefined" &&
    localStorage.getItem("isLoggedIn");
    console.log("CONTEXT STATE", getAuth)

    return <APIContext.Provider value={{getAuth}}>{children}</APIContext.Provider>;
  }
  export default ContextProvider;
  
  // Create a hook to use the APIContext, this is a Kent C. Dodds pattern
  export function useAuth() {
    const context = useContext(APIContext);
    if (context === undefined) {
      throw new Error("Context must be used within a Provider");
    }
    return context;
  }