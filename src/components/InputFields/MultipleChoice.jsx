import { Form, Radio } from "antd";
import { useContext } from "react";
import { getNextFieldByOptions } from "../../utils/NextFieldDecider";
import { findGroupTypeByBlockId } from "../../utils/findGroupType";
import ServeyContext from "../../utils/contexts/ServeyContext/ServeyContext";

const MultipleChoice = ({ item }) => {
  
  const {setIsSubmit,setFieldList,fieldList,setScroll,scroll} = useContext(ServeyContext);

  //change the dependent following fields based on the value of the current field
  const handleOnchange = (e) => {
    setScroll(!scroll)
    const groupType = findGroupTypeByBlockId(item.id);
    if(groupType === "referring" && item?.options.length > 0) {
      const index = fieldList.findIndex((field) => field.blockId === item.id);
      const sliceFieldList = fieldList.slice(0, index + 1);
      setFieldList(sliceFieldList);
      const next = getNextFieldByOptions(item.options,e.target.value);
      if(next.blockId === "submit"){
        setIsSubmit(true);
      }else{
        setIsSubmit(false);
        setFieldList((prev) => [...prev,next]);
      }
    }
  }

  return (
    <Form.Item
      className="custom-form-input"
      name={item.question?.alias}
      label={item.question?.slug}
      rules={[
        {
          required: item.required,
          message: `Please input your ${item.label}`,
        },
      ]}
    >
      <Radio.Group onChange={handleOnchange}>
        {item?.options?.map((item) => (
          <Radio key={item.value} value={item.value}>
            {item.value}
          </Radio>
        ))}
      </Radio.Group>
    </Form.Item>
  );
};

export default MultipleChoice;
