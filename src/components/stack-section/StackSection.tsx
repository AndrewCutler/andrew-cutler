import { Box, Text } from '@chakra-ui/react';
import { ReactElement } from 'react';
import jsLogo from '../../assets/images/js-logo.png';
import StackRow from './StackRow';

const StackSection = ({ title }: { title: string }): ReactElement => {
  return (
    <Box textAlign='left' marginY={8}>
      <Text paddingLeft={5}>{title}</Text>
      <StackRow
        imgSrc={jsLogo}
        imgAlt='JavaScript'
        subtitle='JavaScript'
        textContent='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem enim
            eligendi illo! Necessitatibus, fuga vitae. Nam similique quod maxime
            iusto iure, pariatur suscipit vero explicabo esse aspernatur dicta
            sunt illum.'
      />
    </Box>
  );
};

export default StackSection;
