import { Button, Form } from "antd";
import { useRef, useState, useContext, useEffect } from "react";
import SignatureCanvas from "react-signature-canvas";
import ServeyContext from "../../../utils/contexts/ServeyContext/ServeyContext";

const Signature = ({ item }) => {
  const { form } = useContext(ServeyContext);
  const signatureCanvasRef = useRef();
  const [signatureDataUrl, setSignatureDataUrl] = useState("");
  
  useEffect(() => {
    form.setFieldsValue({ [item.question?.alias]: signatureDataUrl });
    console.log(form.getFieldsValue(item.question?.alias));
  }, [signatureDataUrl, form, item.question?.alias]);

  const handleCanvasChange = () => {
    const dataUrl = signatureCanvasRef.current.toDataURL();
    setSignatureDataUrl(dataUrl);
    console.log(signatureDataUrl)
  };

  const handleClearCanvas = () => {
    signatureCanvasRef.current.clear();
    setSignatureDataUrl("");
    form.setFieldsValue({[item.question?.alias]:null});
  };

  return (
    <div>
      {item.validations?.terms?.map((term, index) => (
        <p key={index}>{term}<br /></p>
      ))}
      <Form.Item
        style={{
          backgroundColor: "#eeeded",
          border: "1px solid #e4dede",
          borderRadius: "10px",
          padding: "10px",
          height: "fit-content",
        }}
        name={item.question?.alias}
        label="Your Signature here"
        rules={[{ required: item?.skip?.id === "-1" }]}
      >
        <div>
          <SignatureCanvas
            ref={signatureCanvasRef}
            onEnd={handleCanvasChange}
            canvasProps={{
              width: "475px",
              height: 100,
              style: {
                border: "1px solid #e4dede",
                borderRadius: "8px",
                backgroundColor: "white",
              },
            }}
          />
          <Button onClick={handleClearCanvas}>Clear</Button>
        </div>
      </Form.Item>
    </div>
  );
};

export default Signature;
