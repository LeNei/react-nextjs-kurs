import {
  useContext,
  createContext,
  useState,
  useCallback,
  useMemo,
} from "react";

const LoginContext = createContext(null);

export function LoginProvider({ children }) {
  const [loggedIn, setLoggedIn] = useState(false);

  const login = useCallback(() => {
    // Login logic
    setLoggedIn((prev) => !prev);
  }, []);

  const contextValues = useMemo(() => {
    return {
      loggedIn,
      login,
    };
  }, [loggedIn, login]);

  return (
    <LoginContext.Provider value={contextValues}>
      {children}
    </LoginContext.Provider>
  );
}

export function useLogin() {
  const ctx = useContext(LoginContext);

  if (!ctx) {
    throw new Error("useLogin must be used within LoginProvider");
  }

  return ctx;
}
