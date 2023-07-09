import { Form, Radio } from "antd";
import { useContext } from "react";
import ServeyContext from "../../utils/contexts/ServeyContext/ServeyContext";
import { findGroupTypeByBlockId } from "../../utils/findGroupType";
import { getNextFieldByOptions } from "../../utils/NextFieldDecider";

const Product = ({ item }) => {
    const {setIsSubmit,setFieldList,fieldList,setScroll,scroll} = useContext(ServeyContext);

  //change the dependent following fields based on the value of the current field
  const handleOnchange = (e) => {
    setScroll(!scroll)
    const groupType = findGroupTypeByBlockId(item.id);
    if(groupType === "referring" && item?.options.length > 0) {
      const index = fieldList.findIndex((field) => field.blockId === item.id);
      const sliceFieldList = fieldList.slice(0, index + 1);
      setFieldList(sliceFieldList);
      const next = getNextFieldByOptions(item.options,e.target.value);
      if(next.blockId === "submit"){
        setIsSubmit(true);
      }else{
        setIsSubmit(false);
        setFieldList((prev) => [...prev,next]);
      }
    }
  }


  return (
    <Form.Item 
        label={item.question.slug} 
        name={item.question.alias}
        rules={[
            {
                required: item.required || item?.skip?.id === "-1",
                message:'This field is required'
            }
        ]}
    >
      <Radio.Group onChange={handleOnchange}>
        {item.options.map((option, index) => (
          <>
            <Radio key={index} value={option.value}>
                <p>{option.slug}</p>
              <img
                src={`${process.env.REACT_APP_cdn}${option.imgSrc}`}
                alt={option.slug}
                width="100"
                height="100"
                border="1px solid"
              />
            </Radio>
          </>
        ))}
      </Radio.Group>
    </Form.Item>
  );
};

export default Product;
