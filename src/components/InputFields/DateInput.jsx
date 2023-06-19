import { DatePicker, Form, } from "antd";

const DateInput = ({ item }) => {
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  const { RangePicker } = DatePicker;
  return (
    <Form.Item
      className="custom-form-input"
      name={item.name}
      label={item.label}
      rules={[
        {
          required: item.required,
          message: `Please input your ${item.label}`,
        },
      ]}
    >
      <RangePicker onChange={onChange} />
    </Form.Item>
  );
};

export default DateInput;
