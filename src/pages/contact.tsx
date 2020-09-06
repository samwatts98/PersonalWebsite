import React from 'react';
import { Title } from 'components/common/Title';
import styled from 'styled-components';
import { FiGithub, FiCodepen, FiLinkedin, FiInstagram, FiTwitter } from 'react-icons/fi';
import { FaDev } from 'react-icons/fa';
import { IconType } from 'react-icons';

enum Handle {
  SAM = '@samwatts98',
  WAM = '@wamsatts',
}
type SocialMediaEntry = {
  icon: IconType;
  platform: string;
  link: string;
  handle: Handle;
};

const accounts: Array<SocialMediaEntry> = [
  {
    icon: FiGithub,
    platform: 'Github',
    link: 'https://github.com/samwatts98',
    handle: Handle.SAM,
  },
  {
    icon: FaDev,
    platform: 'DEV',
    link: 'https://dev.to/samwatts98',
    handle: Handle.SAM,
  },
  {
    icon: FiCodepen,
    platform: 'Codepen',
    link: 'https://codepen.io/samwatts98',
    handle: Handle.SAM,
  },
  {
    icon: FiLinkedin,
    platform: 'Linked In',
    link: 'https://www.linkedin.com/in/samwatts98/',
    handle: Handle.SAM,
  },
  {
    icon: FiInstagram,
    platform: 'Instagram',
    link: 'https://www.instagram.com/wamsatts/',
    handle: Handle.WAM,
  },
  {
    icon: FiTwitter,
    platform: 'Twitter',
    link: 'https://twitter.com/wamsatts',
    handle: Handle.WAM,
  },
];

const ContactSection = styled.section`
  width: 12rem;
  margin: 0 auto;
  &:not(:last-child) {
    padding-bottom: 1rem;
    border-bottom: ${(props) => props.theme.textColour} 1px solid;
  }
  ul {
    list-style: none;
  }
`;

const SocialMediaHandle = styled.h3`
  text-align: center;
`;

const SocialMediaPlatform = styled.a`
  display: block;
  border-radius: 0.5rem;
  padding: 0.5rem;
  white-space: nowrap;
  svg {
    vertical-align: text-bottom;
    padding-right: 1rem;
  }
`;

function Contact(): React.ReactElement {
  return (
    <>
      <Title>Contact</Title>
      <ContactSection>
        <SocialMediaHandle>{Handle.SAM}</SocialMediaHandle>
        <ul>
          {accounts
            .filter((acc) => acc.handle === Handle.SAM)
            .map((acc) => (
              <SocialMediaPlatform href={acc.link} key={acc.platform}>
                <acc.icon />
                {acc.platform}
              </SocialMediaPlatform>
            ))}
        </ul>
      </ContactSection>
      <ContactSection>
        <SocialMediaHandle>{Handle.WAM}</SocialMediaHandle>
        <ul>
          {accounts
            .filter((acc) => acc.handle === Handle.WAM)
            .map((acc) => (
              <SocialMediaPlatform as="a" href={acc.link} key={acc.platform}>
                <acc.icon />
                {acc.platform}
              </SocialMediaPlatform>
            ))}
        </ul>
      </ContactSection>
    </>
  );
}

export default Contact;
