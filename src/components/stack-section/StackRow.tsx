import { Box, Flex, Text } from '@chakra-ui/react';
import { ReactElement } from 'react';
import jsLogo from '../../assets/images/js-logo.png';
import ImageRound from '../image-round/ImageRound';

const StackRow = ({
  imgSrc,
  imgAlt,
  subtitle,
  textContent,
  invert,
}: {
  imgSrc: string;
  imgAlt: string;
  subtitle: string;
  textContent: string;
  invert: boolean;
}): ReactElement => {
  return (
    <Flex
      paddingLeft={7}
      bg={invert ? 'light.200' : 'dark.500'}
      color={invert ? 'dark.400' : 'light.200'}
      alignItems='center'
      w='100vw'
      marginLeft={5}
      marginY={3}
      paddingY={3}
      borderRadius='50px 0% 0% 50px'
    >
      <Box marginRight={4}>
        <ImageRound dimension={50} src={imgSrc} alt={imgAlt} />
      </Box>
      <Box>
        <Text>{subtitle}</Text>
        <Text fontSize='md'>{textContent}</Text>
      </Box>
    </Flex>
  );
};

export default StackRow;
