import { DatePicker, Form } from "antd";
import moment from "moment";

const DateInput = ({ item }) => {
  const validateDate = (_, date) => {
    const minAge = moment().subtract(item?.validations?.min, "years");
    const maxAge = moment().subtract(item?.validations?.max, "years");

    console.log(minAge,maxAge);

    if (date.isBefore(maxAge)) {
      return Promise.reject(`You must be at most ${item?.validations?.max} years old.`);
    }
    if (date.isAfter(minAge)) {
      return Promise.reject(`You must be at least ${item?.validations?.min} years old.`);
    }

    return Promise.resolve();
  };

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
        {
          validator: (item.validations.max) ? validateDate: null,
        },
      ]}
    >
      <DatePicker className="custom-form-input" />
    </Form.Item>
  );
};

export default DateInput;

