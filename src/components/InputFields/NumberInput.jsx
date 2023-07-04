import { Form, InputNumber } from "antd";

const NumberInput = ({item}) => {
  return (
    <Form.Item
      className="custom-form-item"
      name={item.question?.alias}
      label={item.question?.slug}
      rules={[
        {
          required: item.required,
          message: `Please input your ${item.question?.slug}`,
        },
        { 
          pattern: item.validations?.regex, 
          message: `Please enter a valid ${item.question?.slug}` 
      },
      ]}
    >
      <InputNumber type="number" className="custom-form-input"/>
    </Form.Item>
  )
}

export default NumberInput