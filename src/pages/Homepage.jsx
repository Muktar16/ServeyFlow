import { useState } from "react";
import { Button } from "antd";
import ServeyForm from "./ServeyForm/ServeyForm";

const Homepage = () => {
    const [startServey,setStartServey] = useState(false);
    return(<>
        {startServey ? (<ServeyForm/>) : (<Button onClick={()=>setStartServey(!startServey)}>Start Servey</Button>)}
    </>);
}

export default Homepage;