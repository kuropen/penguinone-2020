import React from "react";
const classNames = require('classnames');

export default ({children, className}) => {
  let defaultClasses = [
    'border',
    'rounded-lg',
    'shadow-lg',
    'm-2',
    'p-2',
    'md:m-3',
    'md:p-3',
  ];
  const extraClasses = (!className || Array.isArray(className)) ? className : className.split(' ');

  // If one of margin or padding classes is in extras, corresponding default class is removed.
  if (extraClasses) {
    extraClasses.forEach(element => {
      if (element.indexOf("m-") === 0) {
        defaultClasses.splice(defaultClasses.indexOf('m-2'), 1);
      }
      if (element.indexOf("md:m-") === 0) {
        defaultClasses.splice(defaultClasses.indexOf('md:m-3'), 1);
      }
      if (element.indexOf("p-") === 0) {
        defaultClasses.splice(defaultClasses.indexOf('p-2'), 1);
      }
      if (element.indexOf("md:p-") === 0) {
        defaultClasses.splice(defaultClasses.indexOf('md:p-3'), 1);
      }
    });
  }

  return (
    <div className={classNames(defaultClasses, extraClasses)}>
      {children}
    </div>
  );
};
