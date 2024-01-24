import React, { useState, useContext } from "react";

export const AuthContext = React.createContext();

function MyContext({ children }) {
  const [auth, setAuth] = useState(false);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

export default MyContext;
