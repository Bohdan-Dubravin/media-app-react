import classNames from "shared/lib/classNames/classNames";
import cls from "./Button.module.scss";

import { ButtonHTMLAttributes } from "react";

export enum ThemeButton {
  CLEAR = "clear",
}

interface Button extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export const Button = ({
  children,
  className,
  theme,
  ...otherProps
}: Button) => {
  return (
    <button
      className={classNames(cls.button, {}, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
