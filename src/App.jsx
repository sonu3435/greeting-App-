import React from "react";

function App(){
    let greet = ""
    let cssStyle = {}

    let currTime = new Date();
    let date = currTime.toLocaleDateString()
    let time = currTime.toLocaleTimeString()
    currTime = currTime.getHours()
    
    if(currTime >= 1 && currTime < 12){
      greet = 'Good Morning'
      cssStyle.color = 'green'
    }else if(currTime >= 12 && currTime < 19){
      greet = 'Good Afternoon'
      cssStyle.color = 'orange'
    }else{
      greet = 'Good Night'
      cssStyle.color = 'black'
    }

    return(
        <>
           <div>   
           <h1>Hello sir, <span style={cssStyle}>{greet}</span></h1>
           <h2> <span style={cssStyle}>{time}</span> <span style={cssStyle}>{date}</span></h2>
           </div>
        </>
    )
}

export default App;