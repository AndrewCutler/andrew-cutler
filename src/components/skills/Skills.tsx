import React, { Flex } from '@chakra-ui/react';
import { ReactElement } from 'react';
import GradientBorder from '../gradient-border/GradientBorder';
import StackSection from '../stack-section/StackSection';

const Skills = (): ReactElement => (
  <Flex flexDirection='column'>
    <StackSection title='Front-end' />
    <StackSection invert title='Back-end' />
    <StackSection title='All the rest' />
  </Flex>
);

export default Skills;
