import React, { useEffect, useState } from "react";
import styles from "../styles/MainContent.module.css";

import QUOTES from "../constants/quotelist";

function MainContent() {
  const [quote, setQuote] = useState("");

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * QUOTES.length);
    return QUOTES[randomIndex];
  };

  useEffect(() => {
    setQuote(getRandomQuote());
  }, []);

  return (
    <div className={styles.mainContent}>
      <div className={styles.quoteHolder}>
        {quote ? (
          <div>
            <div className={styles.quote}>{`${quote.quote}`} </div>
            <div className={styles.author}>{`-${quote.author}`}</div>
          </div>
        ) : (
          <div>"Loading..."</div>
        )}
      </div>
    </div>
  );
}

export default MainContent;
