import { Flex, Icon, Image, Text } from '@chakra-ui/react';
import { ReactElement } from 'react';
import photo from '../../assets/images/me.jpeg';
import TextType from '../text-type/TextType';
import { IconButton } from '@chakra-ui/react';

import { AiFillLinkedin, AiOutlineGithub } from 'react-icons/ai';
import ImageRound from '../image-round/ImageRound';

const Header = (): ReactElement => {
  return (
    <Flex
      padding={2}
      bg='dark.700'
      color='light.200'
      alignItems='center'
      justifyContent='space-between'
    >
      <ImageRound src={photo} alt='Andrew Cutler' />
      {/* <Image
        src={photo}
        alt='Andrew Cutler'
        borderRadius='50%'
        border='3px solid'
        borderColor='light.700'
        w='70px'
        h='70px'
      /> */}
      <Flex alignItems='center' justifyContent='center' flexDirection='column'>
        <Text fontSize='3xl' marginLeft={4}>
          Andrew Cutler
        </Text>
        <TextType />
      </Flex>
      <Flex flexDirection='column'>
        <IconButton
          size='sm'
          bg='dark.700'
          border='2px solid'
          borderColor='light.700'
          aria-label='github button'
          margin='1'
          icon={<Icon as={AiOutlineGithub} />}
        />
        <IconButton
          margin='1'
          size='sm'
          bg='dark.700'
          border='2px solid'
          borderColor='light.700'
          aria-label='github button'
          icon={<Icon as={AiFillLinkedin} />}
        />
      </Flex>
    </Flex>
  );
};

export default Header;
