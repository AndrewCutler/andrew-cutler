import { Flex, Icon, Text } from '@chakra-ui/react';
import React, { ReactElement } from 'react';
import { IconType } from 'react-icons';

import { AiFillLinkedin, AiOutlineGithub, AiOutlineMail } from 'react-icons/ai';
import { githubUrl, linkedInUrl } from '../../constants/urls';

const ContactIcon = ({
  icon,
  link,
}: {
  icon: IconType;
  link: string;
}): ReactElement => (
  <Text
    mx={5}
    cursor='pointer'
    fontSize='2xl'
    color='primary.700'
    onClick={() => window.open(link)}
  >
    <Icon as={icon} />
  </Text>
);

const Contact = (): ReactElement => {
  return (
    <Flex paddingY={1} justifyContent='center'>
      <ContactIcon icon={AiFillLinkedin} link={linkedInUrl} />
      <ContactIcon icon={AiOutlineGithub} link={githubUrl} />
      <ContactIcon
        icon={AiOutlineMail}
        link='mailto:@andrewkcutler@gmail.com'
      />
    </Flex>
  );
};

export default Contact;
