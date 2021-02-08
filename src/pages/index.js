import React, {useState} from "react"
import Layout from "../components/layout";
import StopTheSpread from "../components/top/stopTheSpread";
import Iconbox from "../components/iconbox";
import BekoImage from "../images/beko.png";
import NoImage from "../images/Penguinote_NoImage.png";
import { graphql, Link } from "gatsby";
import Box from "../components/box";
import { RichText } from 'prismic-reactjs';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";

const classNames = require('classnames');

const SHOWN_ENTRY_NUMBER_AT_ONCE = 6;

export default ({data}) => {
  const [shownEntryNumber, changeEntryNumber] = useState(SHOWN_ENTRY_NUMBER_AT_ONCE);

  // Build articles data shown in top page
  let viewData = [];
  // First, process for Zenn feed.
  data.allFeedZenn.nodes.forEach(element => {
    const dateTime = element.isoDate;
    const date = dateTime.substr(0, dateTime.indexOf('T'));
    viewData.push({
      date: date,
      reactObject: (
        <Box>
          <a href={element.link} target="_blank" rel="noopener noreferrer" className="block no-underline">
            <div><img src={element.enclosure.url} alt="" /></div>
            <div className="text-lg">{element.title}</div>
            <div>{date}</div>
          </a>
        </Box>
      )
    });
  });
  // Then, process for Penguinote feed.
  data.prismic.allBlogs.edges.forEach(({node}) => {
    let image = NoImage;
    if (node.cover_image) {
      image = node.cover_image.url;
    }
    viewData.push({
      date: node.posting_date,
      reactObject: (
        <Box>
          <Link to={`/blog/${node._meta.uid}`} className="block no-underline">
            <div><img src={image} alt="" /></div>
            <div className="text-lg">{RichText.asText(node.title)}</div>
            <div>{node.posting_date}</div>
          </Link>
        </Box>
      )
    });
  });
  viewData.sort((a, b) => {
    // reverse sort by date
    if (a.date > b.date) {
      return -1;
    }
    if (a.date < b.date) {
      return 1;
    }
    return 0;
  });
  viewData = Array.from(viewData, oldViewData => oldViewData.reactObject);

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
      <h2 className="text-2xl text-bold font-orbitron ml-3"><FontAwesomeIcon icon={faBook} /> Blog Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-3">
        {viewData.slice(0, shownEntryNumber)}
      </div>
      <div className={classNames('text-right', shownEntryNumber < viewData.length ? '' : 'hidden')}>
        <button 
          className="border rounded-lg shadow-lg kpNavLinkBorder text-lg m-2 md:m-3 p-2 md:p-3"
          onClick={() => changeEntryNumber(shownEntryNumber + SHOWN_ENTRY_NUMBER_AT_ONCE)}>もっと見る</button>
      </div>
    </Layout>
  );
};

export const query = graphql`
query IndexPageQuery {
  allFeedZenn {
    nodes {
      title
      link
      enclosure {
        url
      }
      isoDate
    }
  }
  prismic {
    allBlogs {
      edges {
        node {
          title
          posting_date
          _meta {
            id
            uid
          }
          cover_image
        }
      }
    }
  }
}
`;
