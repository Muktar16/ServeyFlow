import { createContext, useEffect, useState } from "react";
import { data } from '../../Data/data';

const ServeyContext = createContext();

export const ServeyContextProvider = ({ children }) => {

  const [fieldList,setFieldList] = useState([]);
  const [nextField,setNextField] = useState();
  const [decideNextBy,setDecideNextBy] = useState(); 
  const [currentField,setCurrentField] = useState();
  
  useEffect(()=>{
    const current = {
      group: data[0].group,
      blockId: data[0].blocks[0].id 
    }
    setCurrentField(current);
    setFieldList((prevFields) => [...prevFields,current]);
  },[])

  console.log("data",data);

  return (
    <ServeyContext.Provider
      value={{
        fieldList,
        setFieldList,
        nextField,
        setNextField,
        decideNextBy,
        setDecideNextBy,
        currentField,
        setCurrentField
      }}
    >
      {children}
    </ServeyContext.Provider>
  );
};

export default ServeyContext;
