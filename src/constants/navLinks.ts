import { NavLinks } from 'types/types';
import PagePaths from './pagePaths';

const navLinks: NavLinks = [
  { href: PagePaths.homePath, title: 'Home' },
  { href: PagePaths.todosPath, title: 'Todos' },
  { href: PagePaths.eventPlanning, title: 'Event Planning' },
];

export default navLinks;
