import React from "react";
import {Link} from "gatsby";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Box from "./box";

export default ({type, href, icon, onClick, text}) => {
    // TODO iconType
    let iconObject = (
        <FontAwesomeIcon icon={icon} className="text-2xl" />
    );

    let linkObject = (
        <a href={href} className="no-underline">
            {iconObject} {text}
        </a>
    );
    if (type === 'Link') {
        linkObject = (
            <Link to={href} className="no-underline block">
                {iconObject} {text}
            </Link>
        );
    }
    if (type === 'button') {
        linkObject = (
            <button onClick={onClick}>
                {iconObject} {text}
            </button>
        )
    }
    return (
        <Box className="kpNavLinkBorder text-lg m-1 md:m-1">
            {linkObject}
        </Box>
    );
};
