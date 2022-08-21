import { Box, Flex, Text } from '@chakra-ui/react';
import { ReactElement } from 'react';
import GradientBorder from '../gradient-border/GradientBorder';

const Bio = (): ReactElement => {
  return (
    <>
      <Flex
        bg='light.500'
        flexDirection='column'
        textAlign='left'
        paddingX={4}
        paddingY={6}
      >
        <Text color='primary.800'>Who am I?</Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo sed
          labore deserunt recusandae vero minus obcaecati possimus nesciunt,
          odio ad alias molestiae voluptas explicabo quos tempora, aliquid unde,
          sequi nulla. Nihil eveniet fuga, nobis quidem quos asperiores ipsam
          tempora totam provident qui nemo repellat incidunt?
        </Text>
      </Flex>
      <GradientBorder />
    </>
  );
};

export default Bio;
