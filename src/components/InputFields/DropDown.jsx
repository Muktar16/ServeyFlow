import { Form, Select } from "antd";
import React, { useContext } from "react";
import ServeyContext from "../../utils/contexts/ServeyContext/ServeyContext";
import { findGroupTypeByBlockId } from "../../utils/findGroupType";
import { getNextFieldByOptions } from "../../utils/NextFieldDecider";

const {Option} = Select;


const DropDown = ({ item }) => {

  // const handleChange = (value, option) => {

  // };

  const {setIsSubmit,setFieldList,fieldList,setScroll,scroll} = useContext(ServeyContext);

  //change the dependent following fields based on the value of the current field
  const handleChange = (value) => {
    setScroll(!scroll)
    const groupType = findGroupTypeByBlockId(item.id);
    if(groupType === "referring" && item?.options.length > 0) {
      const index = fieldList.findIndex((field) => field.blockId === item.id);
      const sliceFieldList = fieldList.slice(0, index + 1);
      setFieldList(sliceFieldList);
      const next = getNextFieldByOptions(item.options,value);
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
      className="custom-form-item"
      name={item?.question?.alias}
      label={item?.question?.slug}
      rules={[
        {
          required: item.required || item?.skip?.id === "-1",
          message: `This field is required`,
        },
      ]}
    >
      <Select className="custom-form-input" placeholder="Select" onChange={handleChange}>
      {item.options?.map((option, index) => (
        <Option key={index} value={option.value}>
          {option.value}
        </Option>
      ))}
    </Select>

    </Form.Item>
  );
};

export default DropDown;
