import './styles/index.scss';
import { useState } from 'react';
import classNames from '@helpers/classNames/classNames';
import { AppRouter } from '@app/providers/router';
import { Link } from 'react-router-dom';
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
      <button onClick={toggleTheme}>On click </button>
      <Link to="/about">about</Link>
      <AppRouter />
    </div>
  );
};
