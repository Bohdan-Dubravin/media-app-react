import classNames from "shared/lib/classNames/classNames";

import cls from "./NavBar.module.scss";
import AppLink, { AppLinkTheme } from "shared/ui/AppLink/AppLink";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <nav className={classNames(cls.navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink theme={AppLinkTheme.SECONDARY} to="/about">
          about
        </AppLink>
        <AppLink to="/about">about</AppLink>
      </div>
    </nav>
  );
};
