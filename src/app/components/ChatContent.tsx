import React, { useState } from "react";
import styles from "../styles/ChatContent.module.css";

const ChatContent: React.FC = () => {
  const [emailBody, setEmailBody] = useState<string>("");

  // add later: on enter open email window
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailBody(e.target.value);
  };

  const openEmail = () => {
    const recipient = "filocomo.rossella@gmail.com";
    const subject = "Joyn us!";
    const body = encodeURIComponent(emailBody);

    const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(
      subject
    )}&body=${body}`;

    window.open(mailtoUrl);
  };

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
          <input
            className={styles.input}
            type="text"
            value={emailBody}
            onChange={handleInputChange}
            placeholder="Write me your message.."
          />
          <button className={styles.enterButton} onClick={openEmail}>
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
