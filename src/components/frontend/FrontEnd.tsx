import { Box, Flex } from '@chakra-ui/react';
import { ReactElement } from 'react';
import StackSection from '../stack-section/StackSection';

const FrontEnd = (): ReactElement => (
  <Flex flexDirection='column'>
    <StackSection title='Front-end' />
  </Flex>
);

export default FrontEnd;
