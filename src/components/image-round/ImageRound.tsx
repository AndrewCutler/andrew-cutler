import React, { ReactElement } from 'react';
import { Box, Image } from '@chakra-ui/react';

const ImageRound = ({
  src,
  alt,
  dimension = 70,
}: {
  src: string;
  alt: string;
  dimension?: number;
}): ReactElement => (
  <Box>
    <Image
      src={src}
      alt={alt}
      borderRadius='50%'
      border='3px solid'
      borderColor='light.700'
      w={dimension}
      h={dimension}
    />
  </Box>
);

export default ImageRound;
