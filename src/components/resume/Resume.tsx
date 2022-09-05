import { Flex, Image } from '@chakra-ui/react';
import React, { ReactElement } from 'react';
import GradientBorder from '../gradient-border/GradientBorder';

const Resume = (): ReactElement => (
  <>
    <Flex justifyContent='center' alignItems='center'>
      <Image
        src=''
        margin={8}
        border='2px solid'
        borderColor='secondary.300'
        minWidth='210px'
        minHeight='320'
      />
    </Flex>
    <GradientBorder />
  </>
);

export default Resume;
