import { Flex, Image } from '@chakra-ui/react';
import React, { ReactElement } from 'react';
import GradientBorder from '../gradient-border/GradientBorder';

import resume from '../../assets/images/resume.jpg';

const Resume = (): ReactElement => (
  <>
    <Flex justifyContent='center' alignItems='center'>
      <Image
        src={resume}
        cursor='pointer'
        margin={8}
        onClick={() => window.open(resume)}
        border='2px solid'
        borderColor='secondary.300'
        minWidth='210px'
        minHeight='320px'
        maxWidth='210px'
        maxHeight='320px'
      />
    </Flex>
    <GradientBorder />
  </>
);

export default Resume;
