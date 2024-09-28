import React, { ReactElement, useEffect, useState } from "react";
import styles from "../styles/ChatContent.module.css";

const messages = [
  <div>Hi there!</div>,
  <img className={styles.gif} src="./cat.gif" alt="Cat GIF" />,
  <div>
    I’m <span className={styles.spanBold}>Rossella Filocomo</span>, a software
    developer.
  </div>,
  <div>
    Thanks for stopping by my site! On the right side you can look at my
    website. Just click on "My Page" and you will see my education, expierences
    and skills.
  </div>,
  <div>
    If you have any questions or want to discuss opportunities, feel free to
    come back to this chat and write to me back below. Looking forward to
    chatting with you! :)
  </div>,
];

const ChatMessage: React.FC<{ message: React.JSX.Element }> = ({ message }) => {
  if (message.type === "img") return message;
  return <div className={styles.message}>{message}</div>;
};

const TypingIndicator: React.FC = () => {
  return (
    <div className={styles.dotsContainer}>
      <div className={styles.dot}></div>
      <div className={styles.dot}></div>
      <div className={styles.dot}></div>
    </div>
  );
};

const ChatContent: React.FC = () => {
  const [emailBody, setEmailBody] = useState<string>("");

  const [visibleMessages, setVisibleMessages] = useState<React.JSX.Element[]>(
    []
  );
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  const [isTyping, setIsTyping] = useState(false);

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

  const loadStateFromLocalStorage = () => {
    const storedMessages = localStorage.getItem("visibleMessages");
    const storedIndex = localStorage.getItem("currentMessageIndex");

    if (storedMessages) {
      setVisibleMessages(JSON.parse(storedMessages));
    }
    if (storedIndex) {
      setCurrentMessageIndex(JSON.parse(storedIndex));
    }
  };

  useEffect(() => {
    loadStateFromLocalStorage();
  }, []);

  useEffect(() => {
    // Only run if there are still messages to display
    if (currentMessageIndex < messages.length) {
      // Delay before typing starts
      const initialDelay = setTimeout(() => {
        setIsTyping(true);

        // Delay for typing animation
        const typingTimeoutId = setTimeout(() => {
          setIsTyping(false);

          // Delay for showing the message after typing ends
          const messageTimeoutId = setTimeout(() => {
            setVisibleMessages((prevMessages) => [
              ...prevMessages,
              messages[currentMessageIndex],
            ]);
            setCurrentMessageIndex((prevIndex) => prevIndex + 1);
          }, 1000); // Delay for message appearance

          // Clean up the messageTimeoutId
          return () => clearTimeout(messageTimeoutId);
        }, 2000); // Duration of typing animation

        // Clean up the typingTimeoutId
        return () => clearTimeout(typingTimeoutId);
      }, 1500); // Initial delay before typing starts

      // Clean up the initialDelay
      return () => clearTimeout(initialDelay);
    }

    // Ensure that typing stops when no messages are left
    setIsTyping(false);
  }, [currentMessageIndex]);

  useEffect(() => {
    localStorage.setItem("visibleMessages", JSON.stringify(visibleMessages));
    localStorage.setItem(
      "currentMessageIndex",
      JSON.stringify(currentMessageIndex)
    );
  }, [visibleMessages, currentMessageIndex]);

  return (
    <div className={`container ${styles.container}`}>
      <div className={styles.imageWrapper}>
        <img className={styles.image} src="./picture.png" alt="picture" />
      </div>
      <div className="chat-container">
        <div className={styles.messageWrapper}>
          {visibleMessages.map((message, index) => (
            <ChatMessage key={index} message={message} /> // Render each message as its own component
          ))}
          {/* 
          <img className={styles.gif} src="./cat.gif" alt="Cat GIF" />
           */}
        </div>
        {isTyping && <TypingIndicator />}
        <div className={styles.inputWrapper}>
          <input
            className={styles.input}
            type="text"
            value={emailBody}
            onChange={handleInputChange}
            placeholder="Write me your message.."
          />
          <button className={styles.enterButton} onClick={openEmail}>
            <img
              src="./enterButton.svg"
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
