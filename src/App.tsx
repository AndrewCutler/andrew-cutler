import * as React from 'react';
import { Box, Text, useBreakpointValue } from '@chakra-ui/react';
import Header from './components/header/Header';
import Skills from './components/skills/Skills';
import Bio from './components/bio/Bio';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Resume from './components/resume/Resume';

const App = () => {
  const isDesktop = useBreakpointValue({ lg: true });

  return (
    <Box textAlign='center' fontSize='xl' overflowX='hidden'>
      <Header />
      {!isDesktop && (
        <Text fontSize='0.8rem' bg='secondary.200' paddingX={10}>
          This site is a work in progress and is still pretty ugly on mobile
          devices. Please bear with me!
        </Text>
      )}
      <Bio />
      <Skills />
      <Portfolio />
      <Resume />
      <Contact />
    </Box>
  );
};

export default App;
