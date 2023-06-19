import { Form, Radio } from "antd";
import { useContext } from "react";
import ServeyContext from "../../contexts/ServeyContext/ServeyContext";
import { getNextFieldByOptions } from "../../utils/NextFieldDecider";

const MultipleChoice = ({ item }) => {

  const {currentGroupType,setFieldList,fieldList} = useContext(ServeyContext);

  const handleOnchange = (e) => {
    if(currentGroupType === "referring" && item?.options){
      const index = fieldList.findIndex((field) => field.blockId === item.id);
      console.log("index",index);
      const sliceFieldList = fieldList.slice(0, index + 1);

      setFieldList(sliceFieldList);
      const next = getNextFieldByOptions(item.options,e.target.value);
      setFieldList((prev) => [...prev,next]);
    }
  }

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
      <Radio.Group onChange={handleOnchange}>
        {item?.options?.map((item) => (
          <Radio key={item.value} value={item.value}>
            {item.value}
          </Radio>
        ))}
      </Radio.Group>
    </Form.Item>
  );
};

export default MultipleChoice;
