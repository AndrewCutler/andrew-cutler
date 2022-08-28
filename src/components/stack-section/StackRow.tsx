import { Box, Flex, Text } from '@chakra-ui/react';
import React, { ReactElement } from 'react';
import ImageRound from '../image-round/ImageRound';

const StackRow = ({
  imgSrc,
  imgAlt,
  subtitle,
  textContent,
  invert = false,
}: {
  imgSrc: string;
  imgAlt: string;
  subtitle: string;
  textContent: string;
  invert?: boolean;
}): ReactElement => {
  return (
    <Flex
      paddingLeft={7}
      border='4px solid'
      borderColor='primary.500'
      bg={invert ? 'light.200' : 'dark.800'}
      color={invert ? 'dark.400' : 'light.200'}
      alignItems='center'
      marginLeft={5}
      marginY={10}
      paddingY={3}
      borderRadius='60px 0% 0% 60px'
    >
      <Box marginRight={4}>
        <ImageRound dimension={50} src={imgSrc} alt={imgAlt} />
      </Box>
      <Box>
        <Text color='primary.700'>{subtitle}</Text>
        <Text fontSize='md'>{textContent}</Text>
      </Box>
    </Flex>
  );
};

export default StackRow;
