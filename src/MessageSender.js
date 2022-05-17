import React, { useState } from "react";
import "./MessageSender.css";
import { Avatar } from "@mui/material";
import VideocamIcon from "@mui/icons-material/Videocam";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";

function MessageSender() {
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    
    
    
    setInput('')
    setImageUrl('')
  };

  
  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar />
        <form action="" method="post">
          <input
            type="text"
            placeholder="What's on your mind? "
            className="messageSender__input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <input type="text"
           placeholder="Image URL(Optional)"
           value={imageUrl}
           onChange={e => setImageUrl(e.target.value)} 
           />
          <button type="submit" onClick={handleSubmit}>
            hidden button
          </button>
        </form>
      </div>
      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <VideocamIcon style={{ color: "red" }} />
          <h5>Live Video</h5>
        </div>
        <div className="messageSender__option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h5>Photo/Video</h5>
        </div>
        <div className="messageSender__option">
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h5>Feeling/Activity</h5>
        </div>
      </div>
    </div>
  );
}


export default MessageSender;
