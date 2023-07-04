import React from "react";
import {  Form, Input } from "antd";

const TextInput = ({ item }) => {

  const validateLength = (_, value) => {
    if (value && (value.length < item.validations?.min || value.length > item.validations?.max)) {
      return Promise.reject(`Input must be between ${item.validations?.min} and ${item.validations?.max} characters`);
    }
    return Promise.resolve();
  };

  return (
    <Form.Item
      className="custom-form-item"
      name={item.question?.alias}
      label={item.question?.slug}
      rules={[
        {
          required: item.required || item.skip === "-1",
          message: `This field is required`,
        },
        {
          validator: validateLength
        },
        {
          pattern: item?.validations?.regex,
          message:`Invalid Input`
        }
      ]}
    >
      <Input type="text" className="custom-form-input"/>
    </Form.Item>
  );
};

export default TextInput;
