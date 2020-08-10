import React from "react";
import Iconbox from "../iconbox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

export default () => (
  <Iconbox className="border-yellow-600" icon={<FontAwesomeIcon icon={faExclamationCircle} />}>
    ここにある記事は、<strong>かつて Qiita に投稿した記事</strong>です。<br/>
    <a href="https://blog.qiita.com/about-user-page-renewal-20200331/">Qiitaのプライバシー問題</a>に伴い、
    2020年3月以降筆者はQiitaへのログインを原則していないため、
    その記事をバックアップして掲載しています。<br />
    ※今後、新規の記事を掲載する場合もあります。
  </Iconbox>
);
