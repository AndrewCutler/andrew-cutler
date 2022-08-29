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
      'Compare nutrients Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, nulla. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, iure consequuntur dolorem tenetur dolores nam perspiciatis vel quod. Quae, soluta?',
    img: '',
    details: ['React'],
  },
  {
    name: 'MLB Compare',
    url: 'http://nutrifind.s3-website-us-east-1.amazonaws.com/',
    description:
      'Compare nutrients Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, nulla.',
    img: '',
    details: ['React', 'cheeriojs', 'ExpressJS'],
  },
  {
    name: 'Nutrifind',
    url: 'http://nutrifind.s3-website-us-east-1.amazonaws.com/',
    description:
      'Compare nutrients Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, nulla.',
    img: '',
    details: ['React'],
  },
  {
    name: 'Nutrifind',
    url: 'http://nutrifind.s3-website-us-east-1.amazonaws.com/',
    description:
      'Compare nutrients Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, nulla.',
    img: '',
    details: ['React'],
  },
];

const Portfolio = (): ReactElement => {
  return (
    <>
      <VStack bg='dark.800' color='light.200' paddingY={5}>
        {projects.map(({ name, description, details }) => (
          <Flex marginY={5} key={name} width='66vw'>
            <Image marginRight={4} src={jsLogo} alt='' w='125' h='125' />
            <Flex
              flexDirection='column'
              textAlign='left'
              justifyContent='space-between'
            >
              <Flex flexDirection='column'>
                <Text fontWeight='600' fontSize='lg'>
                  {name}
                </Text>
                <Text fontSize='md'>{description}</Text>
              </Flex>
              <Flex>
                {details.map((detail) => (
                  <Box margin={4}>
                    <Icon
                      marginRight={1}
                      as={BsCheckCircle}
                      color='secondary.300'
                    />
                    {detail}
                  </Box>
                ))}
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
