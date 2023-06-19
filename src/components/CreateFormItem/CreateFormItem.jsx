import { Form } from "antd";
import TextInput from "../InputFields/TextInput";
import DateInput from "../InputFields/DateInput";
import NumberInput from "../InputFields/NumberInput";
import DropDown from "../InputFields/DropDown";
import Signature from "../InputFields/Signature";
import OTP from "../InputFields/OTP";
import MultipleChoice from "../InputFields/MultipleChoice";
import CheckBox from "../InputFields/CheckBox";
import { useContext, useEffect } from "react";
import ServeyContext from "../../contexts/ServeyContext/ServeyContext";

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
  }, [currentGroupType]);

  return (
    <>
      <Form.Item className="custom-form-item">
        {fieldInfo.type === "textInput" ? (
          <TextInput item={fieldInfo} />
        ) : fieldInfo.type === "date" ? (
          <DateInput item={fieldInfo} />
        ) : fieldInfo.type === "contactNo" ||
          fieldInfo.type === "numberInput" ? (
          <NumberInput item={fieldInfo} />
        ) : fieldInfo.type === "dropdown" ? (
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
      </Form.Item>
    </>
  );
};

export default CreateFormItem;
