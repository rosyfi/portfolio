import React from "react";

import styles from "./ChatContent.module.css";

// Open email with text that was inputed in the input field,
// if there is no text, then just open email
const handleClick = () => {
  console.log("HI there");
};

const ChatContent = () => {
  return (
    <div className={`container ${styles.container}`}>
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          src="https://upload.wikimedia.org/wikipedia/commons/a/ad/Circle_%28transparent%29.png"
          alt=""
        />
      </div>
      <div className="chat-container">
        <div className={styles.messageContainer}>
          <div className={styles.message}>
            <span>
              Hello I’m{" "}
              <span className={styles.spanBold}>Rossella Filocomo</span>, a
              software developer.
            </span>
          </div>
          <img className={styles.gif} src="/cat.gif" alt="Cat GIF" />
          <div className={styles.message}>
            <span>
              Thanks for stopping by my site! If you have any questions or want
              to discuss opportunities, feel free to message me back in this
              chat below. Looking forward to chatting with you! :)
            </span>
          </div>
        </div>
        <div className={styles.inputContainer}>
          <input className={styles.input} type="email" />
          <button className={styles.enterButton} onClick={handleClick}>
            <img
              src="/enterButton.svg"
              alt="enter button"
              className="enterButton"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatContent;
