import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { ReactElement } from 'react';
import jsLogo from '../../assets/images/js-logo.png';
import ImageRound from '../image-round/ImageRound';

const StackSection = ({ title }: { title: string }): ReactElement => {
  return (
    <Box textAlign='left'>
      <Text paddingLeft={5}>{title}</Text>
      <Flex
        paddingLeft={7}
        bg='dark.500'
        color='light.400'
        w='100vw'
        marginLeft={5}
        paddingY={3}
        borderRadius='50px 0% 0% 50px'
      >
        <Box>
          <ImageRound dimension={50} src={jsLogo} alt='JavaScript' />
        </Box>
        <Box>
          <Text>JavaScript</Text>
          <Text fontSize='md'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem enim
            eligendi illo! Necessitatibus, fuga vitae. Nam similique quod maxime
            iusto iure, pariatur suscipit vero explicabo esse aspernatur dicta
            sunt illum.
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default StackSection;
