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
    textContent: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem enim
    eligendi illo! Necessitatibus, fuga vitae. Nam similique quod maxime
    iusto iure, pariatur suscipit vero explicabo esse aspernatur dicta
    sunt illum.`,
  },
  {
    imgSrc: reactLogo,
    subtitle: 'React',
    textContent: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem enim
    eligendi illo! Necessitatibus, fuga vitae. Nam similique quod maxime
    iusto iure, pariatur suscipit vero explicabo esse aspernatur dicta
    sunt illum.`,
    invert: true,
  },
  {
    imgSrc: angularLogo,
    subtitle: 'Angular',
    textContent: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem enim
    eligendi illo! Necessitatibus, fuga vitae. Nam similique quod maxime
    iusto iure, pariatur suscipit vero explicabo esse aspernatur dicta
    sunt illum.`,
  },
];
const backEndRows: Row = [
  {
    imgSrc: cSharpLogo,
    subtitle: 'C#',
    textContent: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem enim
    eligendi illo! Necessitatibus, fuga vitae. Nam similique quod maxime
    iusto iure, pariatur suscipit vero explicabo esse aspernatur dicta
    sunt illum.`,
    invert: true,
  },
  {
    imgSrc: dotNetLogo,
    subtitle: '.NET',
    textContent: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem enim
    eligendi illo! Necessitatibus, fuga vitae. Nam similique quod maxime
    iusto iure, pariatur suscipit vero explicabo esse aspernatur dicta
    sunt illum.`,
  },
  {
    imgSrc: sqlLogo,
    subtitle: 'SQL',
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
