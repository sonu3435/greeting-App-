import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

let greet = ""
let cssStyle = {}

let currTime = new Date();
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



ReactDOM.render(
  <>
  <div>
  <h1>Hello sir, <span style={cssStyle}>{greet}</span></h1>
  </div>
  </>,
  document.getElementById('root')
)