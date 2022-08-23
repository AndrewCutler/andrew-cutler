import { useEffect, useState } from 'react';

const WAIT = 100;

export interface IAutotypeConfig {
  showCursor?: boolean;
}

// TODO: this does not work.

const useAutotype = (
  words: string[],
  config: IAutotypeConfig = { showCursor: true }
): string => {
  const [text, setText] = useState<string>('');
  const [index, setIndex] = useState<number>(0);
  const [done, setDone] = useState<boolean>(false);
  const [letterIndex, setLetterIndex] = useState<number>(0);

  const { showCursor } = config;

  const word = words[index];

  useEffect(() => {
    const interval = window.setInterval(() => {
      if (!done) {
        setText(word.slice(0, letterIndex));
        setLetterIndex(letterIndex + 1);
      } else {
        if (letterIndex > -1) {
          setText(word.slice(0, letterIndex));
          setLetterIndex(letterIndex - 1);
        } else {
          setIndex((index + 1) % words.length);
          setDone(false);
          setLetterIndex(0);
        }
      }
    }, WAIT);

    return () => window.clearInterval(interval);
  }, [letterIndex]);

  useEffect(() => {
    if (letterIndex === words[index].length && letterIndex > 0) {
      setDone(true);
    }
  }, [letterIndex]);

  return text?.trim() + showCursor ? '|' : '';
};

export default useAutotype;
