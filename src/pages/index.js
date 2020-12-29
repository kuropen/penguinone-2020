import React from "react"
import Layout from "../components/layout";
import StopTheSpread from "../components/top/stopTheSpread";
import Iconbox from "../components/iconbox";
import BekoImage from "../images/beko.png";

export default () => {
    return (
        <Layout hideHomeBtn={true}>
          <StopTheSpread />
          <Iconbox className="border-red-700" icon={<img src={BekoImage} className="h-10 md:h-16 rounded-full" alt="" />}>
            <h2 className="text-xl text-bold font-orbitron">Gain the Power from Akabeko</h2>
            <p>
              アマビエもいいけど赤べこも。
              福島県会津地方に伝わる神聖な赤い牛を模した張り子人形・「赤べこ」は、
              天然痘の感染から子供を守ったという言い伝えがあるなど、感染防止のお守りとしても知られています。<br/>
              <a href="https://akabe.co/">
                赤べこからパワーを
              </a>
            </p>
          </Iconbox>
        </Layout>
    );
};
