import { Form, Input } from "antd";

const NumberInput = ({item}) => {
  return (
    <Form.Item
      className="custom-form-item"
      name={item.question?.alias}
      label={item.question?.slug}
      rules={[
        {
          required: item.required,
          message: `Please input your ${item.label}`,
        },
      ]}
    >
      <Input type="text" />
    </Form.Item>
  )
}

export default NumberInput