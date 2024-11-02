import { useState } from 'react';
import './App.css';
import { performAction } from './test';
import mode from './night-mode.png'
import x from './twitter.png'
function App() {
 const [dark,setDark]=useState<string>('light')
  const handleButtonClick = () => {
     // Call the TypeScript function
     performAction()
  };

  const changeMode=()=>{
    setDark((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  }
  return (
    <>
<div style={{
    display: "flex",
    flexDirection: "column",
    gap:4,
    alignItems: "center",
    height: "400px",
    width: "100vw",
       background: `${dark === 'dark' ? 'black' : '#fff'}`,
        color: `${dark === 'dark' ? '#fff' : '#000'}`
}}>
  {
    dark==='dark'?(
      <>
    <img src="https://cdn-icons-png.flaticon.com/128/10562/10562510.png" style={{ height: "44px",marginBottom:"20px",paddingTop:"10px" }} onClick={changeMode}/>
    <div style={{background:"transparent"}}>
   <img src="https://cdn-icons-png.flaticon.com/128/5969/5969020.png" style={{width:"120px"}}/>
   </div>
    </>
    ):(
      <>
      <img src={mode} style={{ height: "44px",marginBottom:"20px",paddingTop:"10px" }} onClick={changeMode}/>
      <div style={{background:"transparent"}}>
   <img src={x} style={{width:"100px"}}/>
   </div>
      </>
    )}
   <h1 style={{marginBottom:0}}>xTension</h1>
   <p>Automate following on x.com using  xTension</p>
   <button style={{background:"blue",color:"white"}} onClick={handleButtonClick}>Follow All</button>
</div>


    </>
  );
}

export default App;
