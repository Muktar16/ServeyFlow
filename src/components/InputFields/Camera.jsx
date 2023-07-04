import { Form, Upload, Button } from 'antd';
import { CameraOutlined } from '@ant-design/icons';

export default function Camera() {
    const handleBeforeUpload = (file) => {
        // Validate the file or perform any additional checks
        return false; // To prevent automatic uploading
      };
  return (
    <>
      <Form.Item
        name="photo"
        label="Capture Photo"
        valuePropName="fileList"
        getValueFromEvent={(event) => {
          if (Array.isArray(event)) {
            return event;
          }
          return event && event.fileList;
        }}
      >
        <Upload.Dragger
          beforeUpload={handleBeforeUpload}
          multiple={false}
          showUploadList={false}
        >
          <p className="ant-upload-drag-icon">
            <CameraOutlined />
          </p>
          <p className="ant-upload-text">Click here to capture photo</p>
        </Upload.Dragger>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </>
  );
}
