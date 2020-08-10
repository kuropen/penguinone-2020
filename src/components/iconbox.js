import React from "react";
import Box from "./box";
const classNames = require('classnames');

export default ({children, className, icon}) => {
  const defaultClasses = [
    'flex',
    'flex-row'
  ];
  const extraClasses = (!className || Array.isArray(className)) ? className : className.split(' ');

  return (
    <Box className={classNames(defaultClasses, extraClasses)}>
      <div className="mr-4 flex-shrink-0">
        <span className="text-4xl md:text-5xl">{icon}</span>
      </div>
      <div className="flex-grow break-all sm:break-normal">
        {children}
      </div>
    </Box>
  );
};
