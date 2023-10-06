import classNames from '@shared/lib/classNames/classNames';

import cls from './PageLoader.module.scss';

interface PageLoaderProps {
  className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => {
  return (
    <div className={classNames(cls.pageLoader, {}, [className])}>
      <div className={classNames(cls.lds_ring, {}, [])}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
