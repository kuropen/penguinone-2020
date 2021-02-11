import React from "react";
import CreativeCommons from "../cc/creativeCommons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import Iconbox from "../iconbox";

export default ({nonFree}) => {
    if (nonFree) {
        return (
        <Iconbox icon={<FontAwesomeIcon icon={faCopyright} />} className="border-yellow-600">
            このページのコンテンツは、<strong>第三者の版権に服するものを含むなどの事情により、クリエイティブ・コモンズライセンスを適用できません。</strong><br />
            つきましては、著作権法によって認められる出典を示した引用や私的利用を除き、無許可の転載・二次利用は禁止と致します。ご理解とご協力をお願い致します。
        </Iconbox>
        );
    } else {
        return (<CreativeCommons />);
    }
}