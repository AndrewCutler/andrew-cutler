import { ReactElement } from 'react';
import { Image } from '@chakra-ui/react';

const ImageRound = ({
  src,
  alt,
  dimension = 70,
}: {
  src: string;
  alt: string;
  dimension?: number;
}): ReactElement => (
  <Image
    src={src}
    alt={alt}
    borderRadius='50%'
    border='3px solid'
    borderColor='light.700'
    w={dimension}
    h={dimension}
  />
);

export default ImageRound;
