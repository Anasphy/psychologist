import React, { useState, useEffect } from 'react';

const WordChanger = () => {
  const words = ['Will help you reconnect with your Body', 'Will help you reconnect with your Mind', 'Will help you find your True Self', 'Will help you acquire Wisdom']; // Add your words here
  const [currentWord, setCurrentWord] = useState(words[0]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Rotate to the next word in the array
      const currentIndex = words.indexOf(currentWord);
      const nextIndex = (currentIndex + 1) % words.length;
      setCurrentWord(words[nextIndex]);
    }, 3000);

    return () => clearInterval(intervalId); 
  }, [currentWord, words]);

  return <div>{` ${currentWord}`}</div>;
};

export default WordChanger;
