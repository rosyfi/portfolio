import React from "react";

import styles from "./ChatWindow.module.css";

const ChatWindow = () => {
  return (
    <div>
      <div>
        <img
          className={styles.image}
          src="https://upload.wikimedia.org/wikipedia/commons/a/ad/Circle_%28transparent%29.png"
          alt=""
        />
      </div>
      <div className="message container">
        <div className={styles.message}>
          <span>
            Hello I’m <span className={styles.spanBold}>Rossella Filocomo</span>
            , a software developer.
          </span>
        </div>
        <div className={styles.message}>
          <span>
            Thanks for stopping by my site! If you have any questions or want to
            discuss opportunities, feel free to message me back in this chat
            below. Looking forward to chatting with you! :)
          </span>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
