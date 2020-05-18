import React from 'react';

import './InfoBar.css'

const InfoBar = ({ room })=>(
   <div className="InfoBar">
       <div className="leftInnerContainer"> 
           <img className="onlineIcon"  alt="online image"/>
            <h3>{room}</h3>
       </div>
       <div className="rightInnerConatiner">
            <a href="/"><img  alt="close image"/></a>
       </div>
   </div>
)

export default InfoBar