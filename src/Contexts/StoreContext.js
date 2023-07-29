import React, { useContext, useState } from 'react';

const storeContext = React.createContext();

export function useStore() {
  return useContext(storeContext);
}

export function StoreProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <storeContext.Provider
      value={{
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </storeContext.Provider>
  );
}
