import { Button, Form } from "antd";
import { useRef, useState, useContext } from "react";
import SignatureCanvas from "react-signature-canvas";
import ServeyContext from "../../../utils/contexts/ServeyContext/ServeyContext";

const Signature = ({ item }) => {

  const [signatureUrl, setSignatureUrl] = useState("");
  const {form} = useContext(ServeyContext);
  const signatureCanvasRef = useRef();

  const handleCanvasChange = () => {
    setSignatureUrl(signatureCanvasRef.current.toDataURL());
    form.setFieldsValue({ [item.question?.alias]: signatureUrl });
    console.log(signatureUrl);
  };

  const handleClearCanvas = () => {
    signatureCanvasRef.current.clear();
    form.setFieldsValue({ [item.question?.alias]: '' });
  };

  return (
    <div>
      {item.validations?.terms?.map((term,index) => (<>{term} <br></br></>))}
      <Form.Item
        style={
          {
            backgroundColor:'#eeeded',
            border: "1px solid #e4dede",
            borderRadius: "10px",
            padding:'10px',
            height: "fit-content",
          }}
        name={item.question?.alias}
        label="Your Signature here"
        rules={[{ required: item?.skip?.id === "-1" }]}
      >
        <SignatureCanvas
          ref={signatureCanvasRef}
          onEnd={handleCanvasChange}
          canvasProps={{
            width: "475px",
            height: 100,
            style: { 
              border: '1px solid #e4dede',
              borderRadius: "8px",
              backgroundColor:'white'
             },
          }}
        />
        <Button onClick={handleClearCanvas}>Clear</Button>
      </Form.Item>
    </div>
  );
};

export default Signature;
