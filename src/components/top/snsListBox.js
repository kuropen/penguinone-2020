import React from "react";
import {Link} from "gatsby";

export default ({accounts, className, elementClassName, socialPolicyLink}) => {
    const accountLinks = accounts.map((account) => {
        const {account_type, account_name, account_link} = account.node;
        const {url} = account_link;
        const linkText = (account_type === 'Facebook') ? account_type : `${account_type} (${account_name})` ;
        return (
            <li key={account_name} className={elementClassName}>
                <a href={url} target="_blank" rel="noopener noreferrer">{linkText}</a>
            </li>
        );
    });
    if (socialPolicyLink) {
        accountLinks.unshift((<li key="SNSPolicy" className={elementClassName}><Link to="/social">Social Network Policy</Link></li>));
    }
    return (
        <ul className={className}>
            {accountLinks}
        </ul>
    );
};
