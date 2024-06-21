import { useState } from "react";
import "./chat.css";
import EmojiPicker from "emoji-picker-react";

const Chat = () => {
  const [opne, setOpen] = useState(false);
  const [text, setText] = useState("");

  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji);

    setOpen(false);
  };
  console.log(text);
  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Abdul Jabbar</span>
            <p>Loram ipsum , sit amet,</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>
      <div className="center">
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="text">
            <p>
              Lorem ipsum, or lipsumas it is sometimes known, is dummy text used
              in laying out print, graphic or web designs. The passage is
              attributed to an unknown typesetter in the 15th century who is
              thoug
            </p>
            <span> 1 minut ago</span>
          </div>
        </div>
        <div className="message  own">
          <div className="text">
            <p>
              Lorem ipsum, or lipsumas it is sometimes known, is dummy text used
              in laying out print, graphic or web designs. The passage is
              attributed to an unknown typesetter in the 15th century who is
              thoug
            </p>
            <span> 1 minut ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="text">
            <p>
              Lorem ipsum, or lipsumas it is sometimes known, is dummy text used
              in laying out print, graphic or web designs. The passage is
              attributed to an unknown typesetter in the 15th century who is
              thoug
            </p>
            <span> 1 minut ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="text">
            <p>
              Lorem ipsum, or lipsumas it is sometimes known, is dummy text used
              in laying out print, graphic or web designs. The passage is
              attributed to an unknown typesetter in the 15th century who is
              thoug
            </p>
            <span> 1 minut ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="text">
            <p>
              Lorem ipsum, or lipsumas it is sometimes known, is dummy text used
              in laying out print, graphic or web designs. The passage is
              attributed to an unknown typesetter in the 15th century who is
              thoug
            </p>
            <span> 1 minut ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="text">
            <p>
              Lorem ipsum, or lipsumas it is sometimes known, is dummy text used
              in laying out print, graphic or web designs. The passage is
              attributed to an unknown typesetter in the 15th century who is
              thoug
            </p>
            <span> 1 minut ago</span>
          </div>
        </div>
      </div>

      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <input
          type="text"
          placeholder="Type a message...."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <div className="emoji">
          <img
            src="./emoji.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
          <div className="picker">
            <EmojiPicker open={opne} onEmojiClick={handleEmoji} />
          </div>
        </div>
        <button className="sendButton">Send</button>
      </div>
    </div>
  );
};

export default Chat;
