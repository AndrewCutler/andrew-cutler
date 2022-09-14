import { Box, Flex, Image, VStack, Text, Icon } from '@chakra-ui/react';
import React, { ReactElement } from 'react';

import GradientBorder from '../gradient-border/GradientBorder';
import baseCrawl from '../../assets/images/base-crawl.png';
import nutrifind from '../../assets/images/nutrifind.png';
import memoria from '../../assets/images/memoria.png';
import andrewCutler from '../../assets/images/andrew-cutler.png';
import { IProject } from '../../models/project.interface';
import Project from '../project/Project';

const projects: IProject[] = [
  {
    name: 'Nutrifind',
    url: 'http://nutrifind.s3-website-us-east-1.amazonaws.com/',
    description:
      "Compare the nutritional content of various food items to see what really is a superfood, and what isn't.",
    img: nutrifind,
    details: ['React', 'USDA API', 'ChakraUI'],
  },
  {
    name: 'MLB Compare',
    url: 'https://mlb-compare.web.app/',
    description:
      'Search MLB hitters from throughout history and compare selected stats and seasons graphically. Consumes an ExpressJS web crawler endpoint to grab player data.',
    img: baseCrawl,
    details: ['React', 'ChakraUI', 'cheeriojs', 'ExpressJS'],
  },
  {
    name: 'todos-cli',
    url: 'https://github.com/AndrewCutler/todos-cli',
    description:
      'A console application for managing the proof-of-concept classic, a todo list.',
    img: baseCrawl, // TODO: get image
    details: ['C#', '.NET', 'console app'],
  },
  {
    name: 'Memoria',
    url: 'https://memoria.andrewcutler.info/',
    description: 'Enter text to memorize, and share with others.',
    img: memoria,
    details: ['React', 'ChakraUI'],
  },
  {
    name: 'This site!',
    url: window.location.href,
    description:
      'What developer worth his salt doesn\t enjoy a recursion joke?',
    img: andrewCutler,
    details: ['React'],
  },
];

const Portfolio = (): ReactElement => (
  <>
    <VStack bg='dark.800' color='light.200' paddingY={5}>
      {projects.map((project) => (
        <Project project={project} key={project.name} />
      ))}
    </VStack>
    <GradientBorder />
  </>
);

export default Portfolio;
