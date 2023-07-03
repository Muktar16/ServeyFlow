import { Form, Input } from "antd";

const PhoneInput = ({item}) => {
  return (
    <Form.Item
      className="custom-form-item"
      name={item.question?.alias}
      label={item.question?.slug}
      rules={[
        {
            required: item.required || item.skip?.id === "-1",
            message: `Contact no is required`,
        },
        { 
            pattern: item.validations?.regex, 
            message: 'Please enter a valid phone number' 
        },
      ]}
    >
      <Input className="custom-form-input" addonBefore = {item.validations?.prefix} />
    </Form.Item>
  )
}

export default PhoneInput;