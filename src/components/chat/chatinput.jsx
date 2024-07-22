import React, { useState, useEffect } from 'react';

const ChatInput = () => {
    const [text, setText] = useState("");

   useEffect(() => {
    console.log(text);
    document.getElementById('input').value='';
  });

    return (
        <div className="center">
            <input type="text" id="input" name="input" />
            <button className="" onClick={() => setText(document.getElementById("input").value)}>Enter</button>
        </div>
    )
};
 
export default ChatInput;