import { DatePicker, Form, } from "antd";

const DateInput = ({ item }) => {
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  const { RangePicker } = DatePicker;
  return (
    <Form.Item
      className="custom-form-item"
      name={item.question.alias}
      label={item.question.slug}
      rules={[
        {
          required: item.required,
          message: `Please input your ${item.label}`,
        },
      ]}
    >
      <RangePicker className="custom-form-input" onChange={onChange} />
    </Form.Item>
  );
};

export default DateInput;
