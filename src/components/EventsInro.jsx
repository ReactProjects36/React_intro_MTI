import { useState } from "react";

export default function Switch() {
        
const [isOn, setIsOn] = useState(false);

  function setSwitch() {
    setIsOn(!isOn);
  }
  
  return (
    <div>
      <h1>The Light is : {isOn ? "On" : "Off"} </h1>
      <button onClick = {setSwitch} >Switch</button>
    </div>
  );
}
