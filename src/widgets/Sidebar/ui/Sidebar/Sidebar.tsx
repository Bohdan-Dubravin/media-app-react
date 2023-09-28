import classNames from '@shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import { useState } from 'react';
import { ThemSwitcher } from '@widgets/ThemeSwitcher';
import { LangSwitcher } from '@widgets/LangSwitcher/LangSwitcher';
interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <button onClick={onToggle}>toggle</button>
      <div className={cls.swithers}>
        <ThemSwitcher />
        <LangSwitcher className={cls.lang} />
      </div>
    </div>
  );
};
