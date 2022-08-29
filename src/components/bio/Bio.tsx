import React, { Divider, Flex, Text } from '@chakra-ui/react';
import { ReactElement } from 'react';
import GradientBorder from '../gradient-border/GradientBorder';

const Bio = (): ReactElement => {
  return (
    <>
      <Flex
        bg='light.500'
        flexDirection='column'
        textAlign='left'
        paddingX='3%'
        paddingY={2}
      >
        <Text color='primary.900' fontWeight='600' marginBottom={2}>
          Who am I?
        </Text>
        <Text>
          Hello there 👋. I'm a full-stack web developer with over three years
          of experience designing, improving, fixing, creating and testing
          high-quality web applications. I love full stack, but I specialize in
          JavaScript and TypeScript and especially enjoy React development.
          Along with my affinity for React, I am highly experienced with Angular
          and all the front-end development must-haves (HTML, CSS, UI/UX design
          principles).
        </Text>
        <Divider marginY={8} />
        <Text>
          When it comes to back-end development, I am a big fan of C# and .NET.
          I also am proficient with SQL and EF Core, and I am constantly adding
          to my knowledge base. Along with that comes unit and integration
          testing, a little bit of devops, and a growing passion for software
          architecture.
        </Text>
        <Divider marginY={8} />
        <Text>
          Oh yeah, and the soft skills: excellent communicator; thrives in
          growth-mindset team environments; decision-maker; constantly learning.
        </Text>
        <Divider marginY={8} />
        <Text marginBottom={8}>
          And for fun, I really enjoy chess, baseball, reading, working out, and
          most of all, spending time with my family.
        </Text>
      </Flex>
      <GradientBorder />
    </>
  );
};

export default Bio;
