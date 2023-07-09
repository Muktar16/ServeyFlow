import { Form, Checkbox } from "antd";
import { useContext, useEffect, useState } from "react";
import ServeyContext from "../../utils/contexts/ServeyContext/ServeyContext";

const CheckboxGroup = Checkbox.Group;

const CheckBox = ({ item }) => {
  const { form } = useContext(ServeyContext);
  const [finalValue,setFinalValue] = useState();


  const handleCheckboxChange = (checkedValues) => {
    
    checkedValues = checkedValues.join(', ');
    console.log(checkedValues)
    console.log(form.getFieldsValue());
  };

  return (
    <Form.Item label={item.question.slug} name={item.question.alias}>
      <CheckboxGroup
        options={item.options.map((option) => ({
          label: option.value,
          value: option.value,
        }))}
        onChange={handleCheckboxChange}
      />
    </Form.Item>
  );
};

export default CheckBox;
