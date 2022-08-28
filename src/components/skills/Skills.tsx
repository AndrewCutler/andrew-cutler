import React, { Flex } from '@chakra-ui/react';
import { ReactElement } from 'react';
import GradientBorder from '../gradient-border/GradientBorder';
import jsLogo from '../../assets/images/js-logo.png';
import angularLogo from '../../assets/images/angular-logo.jpg';
import reactLogo from '../../assets/images/react-logo.png';
import StackSection from '../stack-section/StackSection';
import StackRow from '../stack-section/StackRow';

const frontEndRows = [{}];

const Skills = (): ReactElement => (
  <Flex flexDirection='column'>
    <StackSection title='Front-end'>
      <StackRow
        imgSrc={jsLogo}
        imgAlt='JavaScript'
        subtitle='JavaScript'
        textContent='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem enim
            eligendi illo! Necessitatibus, fuga vitae. Nam similique quod maxime
            iusto iure, pariatur suscipit vero explicabo esse aspernatur dicta
            sunt illum.'
      />
      <StackRow
        invert
        imgSrc={reactLogo}
        imgAlt='React'
        subtitle='React'
        textContent='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem enim
            eligendi illo! Necessitatibus, fuga vitae. Nam similique quod maxime
            iusto iure, pariatur suscipit vero explicabo esse aspernatur dicta
            sunt illum.'
      />
      <StackRow
        imgSrc={angularLogo}
        imgAlt='Angular'
        subtitle='Angular'
        textContent='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem enim
            eligendi illo! Necessitatibus, fuga vitae. Nam similique quod maxime
            iusto iure, pariatur suscipit vero explicabo esse aspernatur dicta
            sunt illum.'
      />
    </StackSection>
    <StackSection invert title='Back-end'>
      <StackRow
        invert
        imgSrc={jsLogo}
        imgAlt='JavaScript'
        subtitle='JavaScript'
        textContent='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem enim
            eligendi illo! Necessitatibus, fuga vitae. Nam similique quod maxime
            iusto iure, pariatur suscipit vero explicabo esse aspernatur dicta
            sunt illum.'
      />
      <StackRow
        imgSrc={reactLogo}
        imgAlt='React'
        subtitle='React'
        textContent='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem enim
            eligendi illo! Necessitatibus, fuga vitae. Nam similique quod maxime
            iusto iure, pariatur suscipit vero explicabo esse aspernatur dicta
            sunt illum.'
      />
      <StackRow
        invert
        imgSrc={angularLogo}
        imgAlt='Angular'
        subtitle='Angular'
        textContent='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem enim
            eligendi illo! Necessitatibus, fuga vitae. Nam similique quod maxime
            iusto iure, pariatur suscipit vero explicabo esse aspernatur dicta
            sunt illum.'
      />
    </StackSection>
    <StackSection title='All the rest'>
      <StackRow
        imgSrc={jsLogo}
        imgAlt='JavaScript'
        subtitle='JavaScript'
        textContent='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem enim
            eligendi illo! Necessitatibus, fuga vitae. Nam similique quod maxime
            iusto iure, pariatur suscipit vero explicabo esse aspernatur dicta
            sunt illum.'
      />
      <StackRow
        invert
        imgSrc={reactLogo}
        imgAlt='React'
        subtitle='React'
        textContent='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem enim
            eligendi illo! Necessitatibus, fuga vitae. Nam similique quod maxime
            iusto iure, pariatur suscipit vero explicabo esse aspernatur dicta
            sunt illum.'
      />
      <StackRow
        imgSrc={angularLogo}
        imgAlt='Angular'
        subtitle='Angular'
        textContent='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem enim
            eligendi illo! Necessitatibus, fuga vitae. Nam similique quod maxime
            iusto iure, pariatur suscipit vero explicabo esse aspernatur dicta
            sunt illum.'
      />
    </StackSection>
  </Flex>
);

export default Skills;
