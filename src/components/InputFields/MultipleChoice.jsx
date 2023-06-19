import { Form, Radio } from "antd";
import { useContext, useState } from "react";
import ServeyContext from "../../contexts/ServeyContext/ServeyContext";

const MultipleChoice = ({ item }) => {

  return (
    <Form.Item
      name={item.question?.alias}
      label={item.question?.slug}
      rules={[
        {
          required: item.required,
          message: `Please input your ${item.label}`,
        },
      ]}
    >
      <Radio.Group>
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
