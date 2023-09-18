import './styles/index.scss';
import { useState } from 'react';
import classNames from '@shared/lib/classNames/classNames';
import { AppRouter } from '@app/providers/router';

import { Navbar } from '@widgets/Navbar';
export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

export const App = () => {
  const [theme, setTheme] = useState(Theme.LIGHT);

  const toggleTheme = () => {
    setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK);
  };

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <button onClick={toggleTheme}>On click </button>

      <AppRouter />
    </div>
  );
};
