import { createContext, useState } from "react";

const ServeyContext = createContext();

export const ServeyContextProvider = ({ children }) => {
  const [data,setData] = useState()
  return (
    <ServeyContext.Provider
      value={{
        
      }}
    >
      {children}
    </ServeyContext.Provider>
  );
};

export default ServeyContext;
