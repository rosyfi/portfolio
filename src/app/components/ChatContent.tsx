import React, { useEffect, useState } from "react";
import styles from "../styles/ChatContent.module.css";

const messages = [
  "Hello I’m Rossella Filocomo, a software developer",
  "Thanks for stopping by my site! On the right side you can look at my website. Just click on 'My Page' and you will see my education, expierences and skills.",
  "If you have any questions or want to discuss opportunities, feel free to come back to this chat message and write to me back below. Looking forward to chatting with you! :)",
];

const ChatMessage: React.FC<{ message: string }> = ({ message }) => {
  return <div className={styles.message}>{message}</div>;
};

const TypingIndicator: React.FC = () => {
  const [dotCount, setDotCount] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDotCount((prevCount) => (prevCount === 3 ? 1 : prevCount + 1));
    }, 500);

    return () => clearInterval(intervalId);
  }, []);

  return <div className="typing-indicator">{".".repeat(dotCount)}</div>;
};

const ChatContent: React.FC = () => {
  const [emailBody, setEmailBody] = useState<string>("");

  const [visibleMessages, setVisibleMessages] = useState<string[]>([]);
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
    if (currentMessageIndex < messages.length) {
      setIsTyping(true);
      const typingTimeoutId = setTimeout(() => {
        setIsTyping(false);
        const messageTimeoutId = setTimeout(() => {
          setVisibleMessages((prevMessages) => [
            ...prevMessages,
            messages[currentMessageIndex],
          ]);
          setCurrentMessageIndex((prevIndex) => prevIndex + 1);
        }, 2000);

        return () => clearTimeout(messageTimeoutId);
      }, 2000);

      return () => clearTimeout(typingTimeoutId);
    }
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
          {isTyping && <TypingIndicator />}
          {/* 
          <img className={styles.gif} src="./cat.gif" alt="Cat GIF" />
           */}
        </div>
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
