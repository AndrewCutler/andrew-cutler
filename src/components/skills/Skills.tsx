import React, { Flex } from '@chakra-ui/react';
import { ReactElement } from 'react';
import jsLogo from '../../assets/images/js-logo.png';
import reactLogo from '../../assets/images/react-logo.png';
import cSharpLogo from '../../assets/images/c-sharp-logo.jpg';
import dotNetLogo from '../../assets/images/dotnet-logo.png';
import sqlLogo from '../../assets/images/sql-logo.png';
import testingLogo from '../../assets/images/testing-logo.png';
import jiraLogo from '../../assets/images/jira-logo.png';
import angularLogo from '../../assets/images/angular-logo.jpg';
import rustLogo from '../../assets/images/rust-logo.svg';
import StackSection from '../stack-section/StackSection';
import StackRow, { IStackRowProps } from '../stack-section/StackRow';

type Row = Omit<IStackRowProps, 'imgAlt'>[];

const frontEndRows: Row = [
  {
    imgSrc: jsLogo,
    subtitle: 'JavaScript',
    textContent: `TypeScript, promises, async/await, ES6 syntax, spread operator/destructuring, OOP, fetch/axios, regular expressions, JSON, DOM interactions, cookies and localStorage`,
  },
  {
    imgSrc: reactLogo,
    subtitle: 'React',
    textContent: `Design and develop large-scale web application front-ends with React 17+, with the use of JSX/TSX, hooks, context, functional components, HOCs, and React standard libraries such as React Router, react-query, Redux and Redux toolkit`,
    invert: true,
  },
  {
    imgSrc: angularLogo,
    subtitle: 'Angular',
    textContent: `Experience with AngularJS and Angular2+, including lazy loading modules, routing (guards and resolvers), lifecycle hooks, reactive and template-driven forms`,
  },
];
const backEndRows: Row = [
  {
    imgSrc: cSharpLogo,
    subtitle: 'C#',
    // todo
    textContent: `C# 10, LINQ, Visual Studio, OOP design`,
    invert: true,
    isDark: true,
  },
  {
    imgSrc: dotNetLogo,
    subtitle: '.NET',
    // todo
    textContent: `Building and maintaining APIs, web applications, console applications, architectural design, MVC design pattern`,
    isDark: true,
  },
  {
    imgSrc: sqlLogo,
    subtitle: 'SQL',
    textContent: `Design and plan database structure for web applications; compose queries to select, update and delete; triggers, stored procedures, views, and temporal tables`,
    invert: true,
    isDark: true,
  },
];

const otherRows: Row = [
  {
    imgSrc: testingLogo,
    subtitle: 'Testing',
    // todo
    textContent: `XUnit, Moq and AutoMapper on the backend; Karma, Jasmine, Spectator for Angular; Jest, react-testing-library for React`,
  },
  {
    imgSrc: jiraLogo,
    subtitle: 'Jira',
    // todo
    textContent: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem enim
    eligendi illo! Necessitatibus, fuga vitae. Nam similique quod maxime
    iusto iure, pariatur suscipit vero explicabo esse aspernatur dicta
    sunt illum.`,
  },
  {
    imgSrc: jiraLogo,
    subtitle: 'CI/CD',
    textContent: `Work with devops engineers to create GitLab pipelines; coordinate with QA engineers to provide stable and testable deployments; assist support engineers with deploying and updating web applications to new release versions`,
  },
];

const Skills = (): ReactElement => (
  <Flex flexDirection='column'>
    <StackSection title='Front-end'>
      {frontEndRows.map(({ imgSrc, subtitle, textContent, invert }) => (
        <StackRow
          key={subtitle}
          imgSrc={imgSrc}
          imgAlt={subtitle}
          subtitle={subtitle}
          textContent={textContent}
          invert={invert}
        />
      ))}
    </StackSection>
    <StackSection invert title='Back-end'>
      {backEndRows.map(({ imgSrc, subtitle, textContent, invert, isDark }) => (
        <StackRow
          key={subtitle}
          imgSrc={imgSrc}
          imgAlt={subtitle}
          subtitle={subtitle}
          textContent={textContent}
          invert={invert}
          isDark={isDark}
        />
      ))}
    </StackSection>
    <StackSection title='All the rest'>
      {otherRows.map(({ imgSrc, subtitle, textContent, invert }) => (
        <StackRow
          key={subtitle}
          imgSrc={imgSrc}
          imgAlt={subtitle}
          subtitle={subtitle}
          textContent={textContent}
          invert={invert}
        />
      ))}
    </StackSection>
  </Flex>
);

export default Skills;
