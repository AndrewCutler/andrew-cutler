import {
  Box,
  Flex,
  Grid,
  GridItem,
  Image,
  VStack,
  Text,
  List,
  ListIcon,
  ListItem,
  Icon,
} from '@chakra-ui/react';
import React, { ReactElement } from 'react';

import GradientBorder from '../gradient-border/GradientBorder';
import { BsCheckCircle } from 'react-icons/bs';
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
    <>
      <VStack bg='dark.800' color='light.200' paddingY={5}>
        {projects.map((project) => (
          <Flex marginY={5} key={project.name}>
            <Image marginRight={4} src={jsLogo} alt='' w='125' h='125' />
            <Flex
              flexDirection='column'
              textAlign='left'
              justifyContent='space-between'
            >
              <Flex flexDirection='column'>
                <Text fontWeight='600' fontSize='lg'>
                  {project.name}
                </Text>
                <Text fontSize='md'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Maiores aperiam explicabo nesciunt. Quas dolor ad corrupti.
                  Molestias atque dolorum laboriosam?
                </Text>
              </Flex>
              <Flex>
                <Box margin={4}>
                  <Icon
                    marginRight={1}
                    as={BsCheckCircle}
                    color='secondary.300'
                  />
                  Lorem ipsum
                </Box>
                <Box margin={4}>
                  <Icon
                    marginRight={1}
                    as={BsCheckCircle}
                    color='secondary.300'
                  />
                  Assumenda
                </Box>
                <Box margin={4}>
                  <Icon
                    marginRight={1}
                    as={BsCheckCircle}
                    color='secondary.300'
                  />
                  Quidem
                </Box>
              </Flex>
            </Flex>
          </Flex>
        ))}
      </VStack>
      <GradientBorder />
    </>
  );
};

export default Portfolio;
