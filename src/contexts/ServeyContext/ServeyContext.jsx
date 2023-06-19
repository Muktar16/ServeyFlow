import { createContext, useEffect, useState } from "react";
import { data } from '../../Data/data';

const ServeyContext = createContext();

export const ServeyContextProvider = ({ children }) => {

  const [fieldList,setFieldList] = useState([]);
  const [nextField,setNextField] = useState();
  const [currentGroupType,setCurrentGroupType] = useState(); 
  const [currentField,setCurrentField] = useState();
  const [isSubmit,setIsSubmit] = useState(false);
  
  useEffect(()=>{
    const current = {
      group: data[0].group,
      blockId: data[0].blocks[0].id,
    }
    setCurrentField(current);
    setFieldList((prevFields) => [...prevFields,current]);
    setCurrentGroupType(data[0].type);
  },[])

  console.log("data",data)

  return (
    <ServeyContext.Provider
      value={{
        fieldList,
        setFieldList,
        nextField,
        setNextField,
        currentGroupType,
        setCurrentGroupType,
        currentField,
        setCurrentField,
        isSubmit,
        setIsSubmit
      }}
    >
      {children}
    </ServeyContext.Provider>
  );
};

export default ServeyContext;
