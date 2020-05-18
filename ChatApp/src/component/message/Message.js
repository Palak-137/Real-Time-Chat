import React from 'react';

import './message.css'

const Message = ({message:{user,text } ,name})=>{
 let currentuser = false
 const trimName = name.trim().toLowerCase();
 if(user===trimName){
     currentuser=true;
 }
 return(
    currentuser
    ? (
         <div className="messageConatiner">
            <p className="sentText pr-10">{trimName}</p>
            <div className="messageBox backgroundBlue">
              <p className="messageText colorWhite">{text}</p>
            </div>
         </div>
    )
    : (
      <div className="messageConatiner justifyStart">
      <div className="messageBox backgroundlight">
        <p className="messageText colorDark">{text}</p>
        <p className="sentText pl-10">{user}</p>
      </div>
      </div>
    )
    )

}

export default Message