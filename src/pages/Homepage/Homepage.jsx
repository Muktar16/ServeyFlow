import { useState } from "react";
import { Button, Row } from "antd";
import ServeyForm from "../ServeyForm/ServeyForm";


const Homepage = () => {
    const [startServey,setStartServey] = useState(false);
    return(<>
        {startServey ? (
                <Row justify="center" align="middle">
                    <ServeyForm/>
                </Row>
            ) : (<Button onClick={()=>setStartServey(!startServey)}>Start Servey</Button>)}
    </>);
}

export default Homepage;