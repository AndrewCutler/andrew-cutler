import { ReactElement, useEffect, useState } from 'react';
import { Text } from '@chakra-ui/react';

const words = [
  'Software Engineer  ',
  'Father  ',
  'Husband  ',
  'Mets fan  ',
  'Chess enthusiast  ',
  'Tolkien lover  ',
  'Follower of Christ  ',
];

const WAIT = 100;

const TextType = (): ReactElement => {
  const [index, setIndex] = useState<number>(0);
  const [letterIndex, setLetterIndex] = useState<number>(0);
  const [done, setDone] = useState<boolean>(false);
  const [text, setText] = useState<string>('');

  const word = words[index];

  useEffect(() => {
    let interval = window.setInterval(() => {
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

  return <Text color='light.500'>{text.trim()}|</Text>;
};

export default TextType;
