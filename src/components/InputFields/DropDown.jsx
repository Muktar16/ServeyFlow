import { Form, Select } from "antd";
import React from "react";


const DropDown = ({ item }) => {

  const handleChange = (value, option) => {
   
  };

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
        {item.options?.map((option,index) => (<>
          <Select.Option value={option.value} key={index}>{option.value}</Select.Option>
        </>))}
        </Select>
    </Form.Item>
  );
};

export default DropDown;
