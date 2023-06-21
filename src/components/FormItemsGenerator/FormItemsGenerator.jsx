import { useContext, useEffect } from "react";
import { data } from "../../Data/data";
import CreateFormItem from "../CreateFormItem/CreateFormItem";
import ServeyContext from "../../utils/contexts/ServeyContext/ServeyContext";

const FormItemsGenerator = ({ currentField }) => {
  
  const { 
    setCurrentField, 
    setCurrentGroupType 
  } =  useContext(ServeyContext);
  const currentGroup = data.find( (group) => group?.group === currentField?.group);

  useEffect(() => {
    setCurrentField(currentField);
    setCurrentGroupType(currentGroup?.type);
    // eslint-disable-next-line
  }, []);

  if (
    currentGroup?.type === "numbervalidation" ||
    currentGroup?.type === "non-referring"
  ) {
    return (
      <>
        {currentGroup.blocks.map((fieldInfo, index) => (
          <CreateFormItem key={index} fieldInfo={fieldInfo} />
        ))}
      </>
    );
  } else {
    const fieldInfo = currentGroup?.blocks.find(
      (item) => item.id === currentField?.blockId
    );
    return <CreateFormItem fieldInfo={fieldInfo} />;
  }
};

export default FormItemsGenerator;
