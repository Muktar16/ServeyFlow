import { useContext, useEffect } from "react";
import { data } from "../../Data/data";
import CreateFormItem from "../CreateFormItem/CreateFormItem";
import ServeyContext from "../../contexts/ServeyContext/ServeyContext";

const FormItemsGenerator = ({ currentField }) => {
  const currentGroup = data.find(
    (group) => group?.group === currentField?.group
  );
  const { setCurrentField, setCurrentGroupType, currentGroupType } =
    useContext(ServeyContext);

  useEffect(() => {
    setCurrentField(currentField);
    setCurrentGroupType(currentGroup?.type);
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
