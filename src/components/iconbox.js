import React from "react";
import Box from "./box";
const classNames = require('classnames');

export default ({children, className, icon, spNoIcon}) => {
  const defaultClasses = [
    'flex',
    'flex-row'
  ];
  const extraClasses = (!className || Array.isArray(className)) ? className : className.split(' ');

  const spNoIconClasses = spNoIcon ? ["hidden", "sm:block"] : null;
  const iconPartClasses = classNames("mr-4", "flex-shrink-0", spNoIconClasses);

  return (
    <Box className={classNames(defaultClasses, extraClasses)}>
      <div className={iconPartClasses}>
        <span className="text-4xl md:text-5xl">{icon}</span>
      </div>
      <div className="flex-grow break-all sm:break-normal">
        {children}
      </div>
    </Box>
  );
};
