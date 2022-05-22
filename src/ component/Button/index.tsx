import React, { CSSProperties, MouseEventHandler } from 'react';

type ButtonProps = {
  text: string;
  style?: CSSProperties | string;
  color: 'brown' | 'orange';
  disable?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export const Button: React.FC<ButtonProps> = ({ text, style, color, disable = false, onClick }) => (
  <button
    onClick={onClick}
    className={`btn-${color} btn-base ${disable ? 'pointer-events-none opacity-70' : ''} ${style} `}
  >
    {text}
  </button>
);
