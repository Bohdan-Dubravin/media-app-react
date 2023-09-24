import { routeConfig } from '@shared/config/routeConfig/routeConfig';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="page-wrapper">
        <Routes>
          {routeConfig.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </div>
    </Suspense>
  );
};

export default AppRouter;
