import React, { Flex } from '@chakra-ui/react';
import { ReactElement } from 'react';
import jsLogo from '../../assets/images/js-logo.png';
import reactLogo from '../../assets/images/react-logo.png';
import cSharpLogo from '../../assets/images/c-sharp-logo.jpg';
import dotNetLogo from '../../assets/images/dotnet-logo.png';
import sqlLogo from '../../assets/images/sql-logo.png';
import angularLogo from '../../assets/images/angular-logo.jpg';
import StackSection from '../stack-section/StackSection';
import StackRow, { IStackRowProps } from '../stack-section/StackRow';

type Row = Omit<IStackRowProps, 'imgAlt'>[];

const frontEndRows: Row = [
  {
    imgSrc: jsLogo,
    subtitle: 'JavaScript',
    textContent: `TypeScript, too! I have a soft spot in my heart for all things JavaScript, and as a web developer I have put a concerted effor into honing my comprehension of and proficiency with the language and its ecosystem. That would include all the basics like classes, data types, ES6 syntax, closures, and string and array methods, but also the nitty-gritty details like proxies, the event loop, IIFEs and others. That being said, I'm learning more every day.`,
  },
  {
    imgSrc: reactLogo,
    subtitle: 'React',
    textContent: `React is by far my favorite front-end framework (ahem, library).`, // todo
    invert: true,
  },
  {
    imgSrc: angularLogo,
    subtitle: 'Angular',
    textContent: `I have worked with AngularJS and Angular2+ for my entire career, developing and testing both small- and medium-to-large-sized web applications.`, // todo
  },
];
const backEndRows: Row = [
  {
    imgSrc: cSharpLogo,
    subtitle: 'C#',
    // todo
    textContent: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem enim
    eligendi illo! Necessitatibus, fuga vitae. Nam similique quod maxime
    iusto iure, pariatur suscipit vero explicabo esse aspernatur dicta
    sunt illum.`,
    invert: true,
  },
  {
    imgSrc: dotNetLogo,
    subtitle: '.NET',
    // todo
    textContent: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem enim
    eligendi illo! Necessitatibus, fuga vitae. Nam similique quod maxime
    iusto iure, pariatur suscipit vero explicabo esse aspernatur dicta
    sunt illum.`,
  },
  {
    imgSrc: sqlLogo,
    subtitle: 'SQL',
    // todo
    textContent: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem enim
    eligendi illo! Necessitatibus, fuga vitae. Nam similique quod maxime
    iusto iure, pariatur suscipit vero explicabo esse aspernatur dicta
    sunt illum.`,
    invert: true,
  },
];

const otherRows: Row = [];

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
      {backEndRows.map(({ imgSrc, subtitle, textContent, invert }) => (
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
