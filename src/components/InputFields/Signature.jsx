import {  Form, Input } from "antd";

const Signature = ({item}) => {
  // console.log("Signature", item);
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
    <Input type= "text" />
  </Form.Item>
  )
}

export default Signature