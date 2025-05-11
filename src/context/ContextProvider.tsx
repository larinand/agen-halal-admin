import { createContext, useContext, useState, ReactNode } from "react";

// Define types for the context state
interface StateContextType {
  currentUser: any;
  token: string | null;
  notification: string | null;

  setUser: (user: any) => void;
  setToken: (token: string | null) => void;
  setNotification: (message: string) => void;
}

// Create context with default values
const StateContext = createContext<StateContextType>({
  currentUser: null,
  token: null,
  notification: null,
  setUser: () => {},
  setToken: () => {},
  setNotification: () => {},
});

// Define props type for the provider
interface ContextProviderProps {
  children: ReactNode;
}

export const ContextProvider = ({ children }: ContextProviderProps) => {
  const [user, setUser] = useState<any>(null);
  const [token, _setToken] = useState<string | null>(
    localStorage.getItem("ACCESS_TOKEN")
  );
  const [notification, _setNotification] = useState<string | null>(null);

  const setToken = (token: string | null) => {
    console.log(token)
    _setToken(token);
    if (token) {
      localStorage.setItem("ACCESS_TOKEN", token);
    } else {
      localStorage.removeItem("ACCESS_TOKEN");
    }
  };

  const setNotification = (message: string) => {
    _setNotification(message);
    setTimeout(() => {
      _setNotification(null);
    }, 5000);
  };

  return (
    <StateContext.Provider
      value={{
        currentUser: user,
        setUser,
        token,
        setToken,
        notification,
        setNotification,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
