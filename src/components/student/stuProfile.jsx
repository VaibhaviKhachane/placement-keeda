import React, { useEffect, useState } from "react";
import "./pagesStu.css";

const StuProfile = ()=>{
const [getData, setData] = useState({});

useEffect(()=>{
    let data = localStorage.getItem("stu");
    if(data){
      setData(JSON.parse(data));
    }
});

return(
<div>
    <strong>Welcome {getData.name}</strong>
    
</div>
);
}
export default StuProfile;
