import { Form, Input } from "antd";

const ContactNo = ({item}) => {

  return (
    <Form.Item
      className="custom-form-item"
      name={item.question?.alias}
      label={item.question?.slug}
      rules={[
        {
          required: item?.required || item?.skip === "-1",
          message: "Phone number is required"
        },
        
        { 
          pattern: item.validations?.regex, 
          message: 'Please enter a valid phone number' 
      },
      ]}
    >
      <Input className="custom-form-input" prefix={item.validations?.prefix} type='number'/>
    </Form.Item>
  )
}

export default ContactNo;