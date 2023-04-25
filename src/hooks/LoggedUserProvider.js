import { createContext, useContext, useState } from "react";
const LoggedUserContext = createContext({});

// esse provider vc coloca no App em volta do Routes por ex
// <LoggedUserProvider></LoggedUserProvider>
export const LoggedUserProvider = ({ children }) => {
  // troca aqui por teus states que tu precisa e o set tb
  const [isValidToken, setIsValidToken] = useState({});

  return (
    // Tudo que você for retornar pra ficar acessivel no hook coloca aqui no value
    <LoggedUserContext.Provider value={{ isValidToken, setIsValidToken }}>
      {children}
    </LoggedUserContext.Provider>
  );
};

// aqui é como tu vai chamar o hook
export function useLoggedUser() {
  const context = useContext(LoggedUserContext);

  return context;
}
