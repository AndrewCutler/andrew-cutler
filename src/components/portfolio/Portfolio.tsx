import { Box, Flex, Image, VStack, Text, Icon } from '@chakra-ui/react';
import React, { ReactElement } from 'react';

import GradientBorder from '../gradient-border/GradientBorder';
import { BsCheckCircle } from 'react-icons/bs';
import jsLogo from '../../assets/images/js-logo.png';
import baseCrawl from '../../assets/images/base-crawl.png';
import nutrifind from '../../assets/images/nutrifind.png';
import andrewCutler from '../../assets/images/andrew-cutler.png';
import { IProject } from '../../models/project.interface';

const projects: IProject[] = [
  {
    name: 'Nutrifind',
    url: 'http://nutrifind.s3-website-us-east-1.amazonaws.com/',
    description:
      'Compare nutrients Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, nulla. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, iure consequuntur dolorem tenetur dolores nam perspiciatis vel quod. Quae, soluta?',
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
      {projects.map(({ name, description, details, url, img }) => (
        // !important because the first project has different padding for some reason
        <Flex marginY='16px !important' key={name} width='66vw'>
          <Image
            onClick={() => window.open(url)}
            cursor='pointer'
            borderRadius='5px'
            border='4px solid'
            borderColor='light.300'
            _hover={{
              textDecoration: 'underline',
              border: '4px solid',
              borderColor: 'secondary.300',
            }}
            marginRight={4}
            src={img || jsLogo}
            alt={name}
            maxWidth='125'
            maxHeight='125'
          />
          <Flex
            flexDirection='column'
            textAlign='left'
            justifyContent='space-between'
          >
            <Flex flexDirection='column'>
              <Text
                onClick={() => window.open(url)}
                cursor='pointer'
                _hover={{ textDecoration: 'underline' }}
                fontWeight='600'
                fontSize='lg'
              >
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

export default Portfolio;
