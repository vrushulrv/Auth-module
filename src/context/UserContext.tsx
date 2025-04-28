// src/context/UserContext.tsx
import { createContext, useState, ReactNode, useContext } from "react";

// Create the shape of user data
type User = {
  name: string;
} | null;

// Create the Context
const UserContext = createContext<{
  user: User;
  setUser: (user: User) => void;
}>({
  user: null,
  setUser: () => {},
});

// Create Provider component
export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

// Export useUser hook for easy use
export const useUser = () => useContext(UserContext);
