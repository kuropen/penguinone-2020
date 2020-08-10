import React from "react";
const classNames = require('classnames');

export default ({children, className}) => {
  const defaultClasses = [
    'border',
    'rounded-lg',
    'shadow-lg',
    'm-2',
    'p-2',
    'md:m-3',
    'md:p-3',
  ];
  const extraClasses = (!className || Array.isArray(className)) ? className : className.split(' ');

  return (
    <div className={classNames(defaultClasses, extraClasses)}>
      {children}
    </div>
  );
};
