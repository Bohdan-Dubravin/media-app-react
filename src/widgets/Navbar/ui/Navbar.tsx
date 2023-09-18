import classNames from '@shared/lib/classNames/classNames';
import { Link } from 'react-router-dom';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <nav className={classNames('navbar', {}, [className])}>
      <Link to="/about">about</Link>
    </nav>
  );
};
