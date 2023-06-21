import { Form, Input } from "antd";

const PhoneInput = ({item}) => {
  return (
    <Form.Item
      className="custom-form-input"
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
      <Input placeholder = "Enter contact No." addonBefore = {item.validations?.prefix} />
    </Form.Item>
  )
}

export default PhoneInput;