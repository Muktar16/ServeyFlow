


import { useContext, useEffect } from "react";
import { data } from "../../Data/data";
import CreateFormItem from "../CreateFormItem/CreateFormItem";
import ServeyContext from "../../contexts/ServeyContext/ServeyContext";

const  FormItemsGenerator = ({currentField}) => {
    const currentGroup = data.find((group)=> group?.group === currentField.group);
    const {setDecideNextBy,setCurrentField} = useContext(ServeyContext);

    useEffect(()=>{
        setCurrentField(currentField);
    },[])

    if(currentGroup.type === "numbervalidation" || currentGroup.type === "non-referring"){
        setDecideNextBy('jumping');
        return(
        <>
            {currentGroup.blocks.map((fieldInfo,index) => (
                <CreateFormItem key={index} fieldInfo={fieldInfo}/>
            ))}
        </>
        )
    }
    else{
        setDecideNextBy('reference');
        const fieldInfo = currentGroup?.blocks.find((item) => item.id === currentField.blockId);
        console.log("Feilds Info",fieldInfo)
        return(
            <CreateFormItem fieldInfo={fieldInfo}/>
        );
    }
}

export default FormItemsGenerator;