import { Form, Select } from "antd";
import React from "react";

const DropDown = ({ item, dropDownArray,  setReferTo }) => {
  //if dropdown selected referto exist than referto else jumping logic 
  console.log("DropDown : ", item);
  // console.log("dropDownArray : ", dropDownArray);
  const handleChange = (value, option) => {
    // console.log("Value : ", value);
    // console.log("option : ", option.referTo.id || null);
    setReferTo(option.referTo.id || null)
  };

  return (
    <Form.Item
      name={item.name}
      label={item.label}
      rules={[
        {
          required: item.required,
          message: `Please input your ${item.label}`,
        },
      ]}
    >
      <Select onChange={handleChange} options={dropDownArray} />
    </Form.Item>
  );
};

export default DropDown;
