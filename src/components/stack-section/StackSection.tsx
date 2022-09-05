import React, { Box, Text } from '@chakra-ui/react';
import { ReactElement, ReactNode } from 'react';
import jsLogo from '../../assets/images/js-logo.png';
import angularLogo from '../../assets/images/angular-logo.jpg';
import reactLogo from '../../assets/images/react-logo.png';
import StackRow from './StackRow';
import GradientBorder from '../gradient-border/GradientBorder';

const StackSection = ({
  title,
  invert = false,
  children,
}: {
  title: string;
  invert?: boolean;
  children: ReactNode[];
}): ReactElement => {
  return (
    <>
      <Box
        textAlign='left'
        paddingY={8}
        bg={invert ? 'dark.800' : 'light.200'}
        color={invert ? 'light.200' : 'dark.700'}
      >
        <Text paddingLeft={5} fontWeight='600'>
          {title}
        </Text>
        {children}
      </Box>
      <GradientBorder ltr={invert} />
    </>
  );
};

export default StackSection;
