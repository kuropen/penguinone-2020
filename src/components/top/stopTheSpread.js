import React from "react";
import Iconbox from "../iconbox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVirusSlash } from "@fortawesome/free-solid-svg-icons";

export default () => {
  return (
    <Iconbox className="border-yellow-600" icon={<FontAwesomeIcon icon={faVirusSlash} />}>
      <h2 className="text-xl text-bold font-orbitron">COVID-19: Stop the Spread</h2>
      <p>
        感染予防は自分を守るためだけではない。うつされてはいけない人がいる。<br/>
        社会全体を守るために、
        <a href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/0000121431_newlifestyle.html" target="_blank" rel="noopener noreferrer">
          新しい生活様式
        </a>
        を厳守し、一人でも多くの人を守ろう。
      </p>
      <p>
        Kuropenは新型コロナウイルス早期終息に協力するため、 
        <a href="https://foldingathome.org/" target="_blank" rel="noopener noreferrer">Folding@home</a>
        プロジェクトに
        <a href="https://stats.foldingathome.org/donor/Kuropen" target="_blank" rel="noopener noreferrer">協力しています</a>。
      </p>
    </Iconbox>
  );
}
