import { Box, Text } from '@chakra-ui/react';
import { ReactElement } from 'react';
import jsLogo from '../../assets/images/js-logo.png';
import angularLogo from '../../assets/images/angular-logo.jpg';
import reactLogo from '../../assets/images/react-logo.png';
import StackRow from './StackRow';

const StackSection = ({
  title,
  invert = false,
}: {
  title: string;
  invert?: boolean;
}): ReactElement => {
  return (
    <Box
      textAlign='left'
      marginY={8}
      bg={invert ? 'dark.500' : 'light.200'}
      color={invert ? 'light.200' : 'dark.400'}
    >
      <Text paddingLeft={5}>{title}</Text>
      <StackRow
        invert={invert}
        imgSrc={jsLogo}
        imgAlt='JavaScript'
        subtitle='JavaScript'
        textContent='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem enim
            eligendi illo! Necessitatibus, fuga vitae. Nam similique quod maxime
            iusto iure, pariatur suscipit vero explicabo esse aspernatur dicta
            sunt illum.'
      />
      <StackRow
        invert={invert}
        imgSrc={reactLogo}
        imgAlt='React'
        subtitle='React'
        textContent='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem enim
            eligendi illo! Necessitatibus, fuga vitae. Nam similique quod maxime
            iusto iure, pariatur suscipit vero explicabo esse aspernatur dicta
            sunt illum.'
      />
      <StackRow
        invert={invert}
        imgSrc={angularLogo}
        imgAlt='Angular'
        subtitle='Angular'
        textContent='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem enim
            eligendi illo! Necessitatibus, fuga vitae. Nam similique quod maxime
            iusto iure, pariatur suscipit vero explicabo esse aspernatur dicta
            sunt illum.'
      />
    </Box>
  );
};

export default StackSection;
