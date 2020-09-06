import { FiHome, FiUser, FiCode, FiCamera } from 'react-icons/fi';
import { IconType } from 'react-icons/lib';

export interface PageLinkProps {
  MenuIcon: IconType;
  text: string;
  href: string;
}
export const pageLinks: Array<PageLinkProps> = [
  { text: 'Home', MenuIcon: FiHome, href: '/' },
  { text: 'Contact', MenuIcon: FiUser, href: '/contact' },
  { text: 'Photography', MenuIcon: FiCamera, href: '/photography' },
  { text: 'Projects', MenuIcon: FiCode, href: '/projects' },
];
