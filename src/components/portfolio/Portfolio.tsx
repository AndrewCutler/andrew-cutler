import { Box, Flex, Grid, GridItem, Image, Text } from '@chakra-ui/react';
import React, { ReactElement } from 'react';

import jsLogo from '../../assets/images/js-logo.png';
import { IProject } from '../../models/project.interface';

const projects: IProject[] = [
  {
    name: 'Nutrifind',
    url: 'http://nutrifind.s3-website-us-east-1.amazonaws.com/',
    description:
      'Compare nutrients Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, nulla.',
    img: '',
  },
  {
    name: 'Nutrifind',
    url: 'http://nutrifind.s3-website-us-east-1.amazonaws.com/',
    description:
      'Compare nutrients Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, nulla.',
    img: '',
  },
  {
    name: 'Nutrifind',
    url: 'http://nutrifind.s3-website-us-east-1.amazonaws.com/',
    description:
      'Compare nutrients Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, nulla.',
    img: '',
  },
  {
    name: 'Nutrifind',
    url: 'http://nutrifind.s3-website-us-east-1.amazonaws.com/',
    description:
      'Compare nutrients Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, nulla.',
    img: '',
  },
];

const Portfolio = (): ReactElement => {
  return (
    <Grid bg='dark.800' templateColumns='repeat(2, 1fr)' gap={8} paddingTop={4}>
      {projects.map((project) => (
        <GridItem
          padding={2}
          margin={1}
          borderRadius='8px'
          boxShadow='md'
          h='100%'
          w='100%'
          bg='secondary.300'
        >
          <Flex
            flexDirection='column'
            bg='light.300'
            borderRadius='8px'
            justifyContent='center'
          >
            <Text fontWeight='600'>{project.name}</Text>
            <Flex justifyContent='center'>
              <Image src={jsLogo} alt='' w='200' h='200' />
            </Flex>
            <Text fontSize='md'>{project.description}</Text>
          </Flex>
        </GridItem>
      ))}
    </Grid>
  );
};

export default Portfolio;
