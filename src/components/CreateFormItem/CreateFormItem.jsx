
import TextInput from "../InputFields/TextInput";
import DateInput from "../InputFields/DateInput";
import NumberInput from "../InputFields/NumberInput";
import DropDown from "../InputFields/DropDown";
import Signature from "../InputFields/Signature/Signature";
import OTP from "../InputFields/OTP";
import MultipleChoice from "../InputFields/MultipleChoice";
import CheckBox from "../InputFields/CheckBox";
import { useContext, useEffect } from "react";
import ServeyContext from "../../utils/contexts/ServeyContext/ServeyContext";
import PhoneInput from "../InputFields/PhoneInput";

const CreateFormItem = ({ fieldInfo }) => {
  const { currentGroupType, setNextField } = useContext(ServeyContext);
  console.log("currentItem",fieldInfo);
  useEffect(() => {
    if (currentGroupType === "referring" && fieldInfo.referTo) {
      const next = {
        group: fieldInfo?.referTo?.group_no,
        blockId: fieldInfo?.referTo?.id,
      };
      setNextField(next);
    }
    // eslint-disable-next-line
  }, [currentGroupType]);

  return (
    <>
      <div>
        {fieldInfo.type === "contactNo" ? (<PhoneInput item={fieldInfo}/>) :
        fieldInfo.type === "numberInput" ? (<NumberInput item={fieldInfo}/>) :
        fieldInfo.type === "textInput" ? (<TextInput item={fieldInfo} />) : 
        fieldInfo.type === "date" ? (<DateInput item={fieldInfo} />) :  
        fieldInfo.type === "dropdown" ? (
          <DropDown item={fieldInfo} />
        ) : fieldInfo.type === "terms" ? (
          <Signature item={fieldInfo} />
        ) : fieldInfo.type === "otp" ? (
          <OTP item={fieldInfo} />
        ) : fieldInfo.type === "multipleChoice" ||
          fieldInfo.type === "checklist" ? (
          <MultipleChoice item={fieldInfo} />
        ) : fieldInfo.type === "checkbox" ? (
          <CheckBox item={fieldInfo} />
        ) : (
          <>{fieldInfo.type}</>
        )}
      </div>
    </>
  );
};

export default CreateFormItem;
