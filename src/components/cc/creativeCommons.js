import React from "react";
import Iconbox from "../iconbox";
import CCLink from "./ccLink";

export default () => (
  <Iconbox icon={<CCLink><img src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" alt="クリエイティブ・コモンズ・ライセンス" /></CCLink>}>
    このページのコンテンツは
    <CCLink>クリエイティブ・コモンズ 表示 - 非営利 - 継承 4.0 国際 ライセンス</CCLink>
    の下に提供されています。<br/>
    出典を明記すれば、営利目的以外では自由に利用できます。詳細はリンク先をご覧ください。
  </Iconbox>
);
