import {
  Box,
  Flex,
  Icon,
  Image,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import React from 'react';
import { ReactElement } from 'react';
import { BsCheckCircle } from 'react-icons/bs';
import { IProject } from '../../models/project.interface';

const Project = ({ project }: { project: IProject }): ReactElement => {
  const isDesktop = useBreakpointValue({ lg: true });

  const { name, description, details, url, img } = project;

  return (
    // !important because the first project has different padding for some reason
    <Flex
      marginY='16px !important'
      width='66vw'
      flexDirection={isDesktop ? 'row' : 'column'}
    >
      <Flex justifyContent='center'>
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
          src={img}
          alt={name}
          maxWidth='125'
          maxHeight='125'
        />
      </Flex>
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
            <Box margin={4} key={detail.replace(/\s+/g, '_')}>
              <Icon marginRight={1} as={BsCheckCircle} color='secondary.300' />
              {detail}
            </Box>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Project;
