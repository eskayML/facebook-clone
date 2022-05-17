import React from "react";
import "./Feed.css";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";
import c from './assets/story-pack/c.webp'


function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />

      <Post 
      profilePic='https://scontent-los2-1.xx.fbcdn.net/v/t1.6435-1/c0.7.200.200a/p200x200/236275264_205538968217777_6343029915058239981_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=7206a8&_nc_eui2=AeG3P1kTHfJpYYlxGMTT-cT7AERduxiZAe0ARF27GJkB7X39BqxeNDAJR4GC4jXShM1Ddk9IciaaSh4g0Na1gEZ3&_nc_ohc=MxJxPxcbN8kAX_v_BJn&_nc_ht=scontent-los2-1.xx&oh=64bbba874cecb26e94209fe48af83c99&oe=61ADA966'
      message='wow this works fine'
      timestamp = 'this is timestamp'
      username = 'Samuel'
      image = {c}
      />
      
    </div>
  );
}



export default Feed;
