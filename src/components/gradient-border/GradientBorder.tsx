import { Box } from '@chakra-ui/react';
import { ReactElement } from 'react';

const GradientBorder = ({ ltr = true }: { ltr?: boolean }): ReactElement => {
  const gradient = `linear(${
    ltr ? 'to-r' : 'to-l'
  }, primary.500, secondary.600)`;

  return <Box h='3px' w='100vw' bgGradient={gradient} />;
};

export default GradientBorder;
