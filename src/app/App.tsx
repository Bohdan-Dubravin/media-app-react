import { Route, Routes } from 'react-router-dom';
import './styles/index.scss';

import { Link } from 'react-router-dom';

import { Suspense, useState } from 'react';
import classNames from '@helpers/classNames/classNames';
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
      <Link to={'/about'}>About</Link>
      <Link to={'/'}>Main</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes></Routes>
      </Suspense>
    </div>
  );
};
