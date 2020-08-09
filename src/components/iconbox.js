import React from "react";
const classNames = require('classnames');

export default ({children, className, icon}) => {
  const defaultClasses = [
    'border',
    'rounded-lg',
    'shadow-lg',
    'm-3',
    'p-3',
    'flex',
    'flex-row'
  ];
  const extraClasses = (!className || Array.isArray(className)) ? className : className.split(' ');

  return (
    <div className={classNames(defaultClasses, extraClasses)}>
      <div className="mr-4 flex-shrink-0">
        <span className="text-5xl">{icon}</span>
      </div>
      <div className="flex-grow">
        {children}
      </div>
    </div>
  );
};
