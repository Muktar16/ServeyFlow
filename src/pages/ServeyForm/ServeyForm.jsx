import { Button, Form, message } from "antd";
import { useContext } from "react";
import ServeyContext from "../../contexts/ServeyContext/ServeyContext";
import FormItemsGenerator from "../../components/FormItemsGenerator/FormItemsGenerator";
import { data } from "../../Data/data";
import { getNextFieldByJumpingLogic, getNextFieldByOptions, getNextFieldByReferTo } from "../../utils/NextFieldDecider";

const ServeyForm = () => {
    const [form] = Form.useForm();
    const {
        fieldList,
        nextField,
        decideNextBy,
        currentField,
        setFieldList
      } = useContext(ServeyContext);
    
    const onFinish = (values) =>{
        console.log("Submitted values" ,values);
    }

    const onFinishFailed = () => {
        message.error("Check if all fields are filled properly");
    }

    const handleNextButton = () => {
        if(decideNextBy === 'jumping'){
            const {jumping_logic} = data.find((group)=> group.group === currentField.group);
            const next = getNextFieldByJumpingLogic(jumping_logic);
            setFieldList((prev)=>[...prev,next]);
        }
        else{
            const {blocks} = data.find((group)=> group.group === currentField.group);
            const {options,referTo} = blocks.find((field)=> field.id === currentField.blockId);
            if(referTo){
                const next = getNextFieldByReferTo(referTo);
                setFieldList((prev)=>[...prev,next]);
            }
            else{
                const next = getNextFieldByOptions(options,form);
                console.log("Next",next)
                setFieldList((prev)=>[...prev,next]);
                
            }
        }
    }

    return(<>
        <Form form={form} onFinish={onFinish} onFinishFailed={onFinishFailed}>
            {fieldList.map((field,index) => (
                <FormItemsGenerator key={index} currentField={field}/>
            )   
            )}
            <Form.Item>
                <Button onClick={handleNextButton}>Next</Button>
            </Form.Item>
        </Form>
    </>);
};

export default ServeyForm;






// import React, { useState } from 'react';
// import { Form, Input, Button } from 'antd';

// const ServeyForm = () => {
//   const [form] = Form.useForm();
//   const [currentFieldIndex, setCurrentFieldIndex] = useState(0);

//   const fields = [
//     { name: 'field1', label: 'Field 1' },
//     { name: 'field2', label: 'Field 2' },
//     { name: 'field3', label: 'Field 3' },
//     // Add more fields as needed
//   ];

//   const handleNext = () => {
//     form.validateFields().then(() => {
//       setCurrentFieldIndex((prevIndex) => prevIndex + 1);
//       form.resetFields();
//     });
//   };

//   const renderFormItems = () => {
//     const formItems = fields.slice(0, currentFieldIndex + 1).map((field) => (
//       <Form.Item key={field.name} label={field.label} name={field.name} rules={[{ required: true, message: 'Field is required' }]}>
//         <Input />
//       </Form.Item>
//     ));
//     return formItems;
//   };

//   return (
//     <Form form={form} layout="vertical">
//       {renderFormItems()}
//       {currentFieldIndex < fields.length - 1 && (
//         <Button type="primary" onClick={handleNext}>
//           Next
//         </Button>
//       )}
//     </Form>
//   );
// };

// export default ServeyForm;