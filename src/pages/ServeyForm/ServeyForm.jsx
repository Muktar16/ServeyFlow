import { Button, Form, message } from "antd";
import { useContext, useEffect } from "react";
import FormItemsGenerator from "../../components/FormItemsGenerator/FormItemsGenerator";
import { data } from "../../Data/data";
import { getNextFieldByJumpingLogic } from "../../utils/NextFieldDecider";
import "./ServeyForm.css";
import ServeyContext from "../../utils/contexts/ServeyContext/ServeyContext";

const ServeyForm = () => {

    const [form] = Form.useForm();
    const {
        fieldList,
        currentGroupType,
        currentField,
        setFieldList,
        isSubmit,
        setIsSubmit,
        nextField,
        setScroll,
        scroll
    } = useContext(ServeyContext);

    useEffect(() => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth'
        });
    }, [scroll]);
    
    const onFinish = (values) =>{
        console.log("Submitted values" ,values);
    }  

    const onFinishFailed = () => {
        message.error("Check if all fields are filled properly");
    }

    const handleNextButton = () => {
        setScroll(!scroll); //scroll to next button
        // form.validateFields().then(()=>{
            if(currentGroupType === 'numbervalidation' || currentGroupType === "non-referring"){
            const {jumping_logic} = data.find((group)=> group?.group === currentField?.group);
            const next = getNextFieldByJumpingLogic(jumping_logic,form.getFieldsValue());
                if(next.blockId === "submit"){
                    setIsSubmit(true);
                }
                else{
                    setIsSubmit(false);
                    setFieldList((prev) => [...prev,next]);
                }
            }
            else if(!fieldList.some((item) => JSON.stringify(item) === JSON.stringify(nextField))){
                setFieldList((prev)=>[...prev,nextField]);
            }
        // }).catch((err)=>{
        //     console.log(err);
        // })
    }

    return(<>
        <Form
            onFinishFailed={onFinishFailed}
            className="servey-form"
            scrollToFirstError
            autoComplete="on"
            initialValues={{ remember: true }}
            form={form}
            onFinish={onFinish}
            layout="vertical"
        >
            {fieldList.map((field,index) => (
                <FormItemsGenerator key={index} currentField={field}/>
            )   
            )}
            {isSubmit ? (
                <Form.Item>
                    <Button type="primary" htmlType="submit">Submit</Button>
                </Form.Item>
            ):(
                <Form.Item>
                    <Button onClick={handleNextButton}>Next</Button>
                </Form.Item>
            )}
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