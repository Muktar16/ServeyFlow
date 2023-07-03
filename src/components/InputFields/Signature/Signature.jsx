import { Form } from "antd";
import { useRef, useState } from "react";
import SignatureCanvas from "react-signature-canvas";

const Signature = ({ item }) => {

  const [signatureUrl, setSignatureUrl] = useState("");
  const signatureCanvasRef = useRef();

  const handleCanvasChange = () => {
    setSignatureUrl(signatureCanvasRef.current.toDataURL());
    console.log(signatureUrl);
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
            width: "70%",
            height: 100,
            style: { 
              border: '1px solid #e4dede',
              borderRadius: "8px",
              backgroundColor:'white'
             },
          }}
        />
      </Form.Item>
    </div>
  );
};

export default Signature;
