import React, { useEffect , useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles , setarticles] = useState([]);
  const [loading, setloading] = useState(true);
  const [page , setpage] = useState(1);
  const [totalResults , settotalResults] = useState(0)
    // document.title = `${Capitalize(props.category)}-NewsBuzz`;

  const Capitalize=(str)=>{
    return str.charAt(0).toUpperCase() + str.slice(1);
    }

  const UpdateNews = async () => {
  props.setProgress(10);
    let apiurl = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=6052d5bd642e44ed9cc75df30b51f237&page=1&pageSize=${props.pageSize}`;
    setloading(true);
    props.setProgress(40);
    let data = await fetch(apiurl);
    let parsedata = await data.json();
    props.setProgress(80);
    setarticles( parsedata.articles)
    settotalResults(parsedata.totalResults)
    setloading(false)
    props.setProgress(100);
  }
  
  useEffect(
    () => {
      UpdateNews();
    },
    [props.source],
  );
  // clickPrevBtn = async () => {
  //   setState({ page:state.page - 1, });
  //   UpdateNews();
  // }
  // clickNxtBtn = async () => {
  //  setState({ page:page + 1 })
  //   UpdateNews();

  // }
  const fetchMoreData = async () => {
    let apiurl = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=6052d5bd642e44ed9cc75df30b51f237&page=${page+1}&pageSize=${props.pageSize}`;
    setpage(page + 1)
  let data = await fetch(apiurl);
  let parsedata = await data.json();
  setarticles(articles.concat(parsedata.articles))
  settotalResults(parsedata.totalResults)
  };
    return (
      <>
            <div className="container">
        <h1 className="text-center" style={{ margin: "70px 20px  20px" }}>NewsBuzz - Top {Capitalize(props.category)} Headlines</h1>
        {/* {loading && <Spinner />} */}
        <InfiniteScroll
          dataLength={articles?.length}
          next={fetchMoreData}
          hasMore={articles?.length !== articles?.totalResults }
          loader={<Spinner/>}
        >
        <div className="row">
          {!loading && articles?.map((element) => {
            return <div className="col-md-4">
              <NewsItem title={element.title ? element.title: ""} description={element.description ? element.description : ""} imageurl={element.urlToImage} newsurl={element.url} />
            </div>

          })}
        </div>
        </InfiniteScroll>
        </div>
        </>
    )
        }

News.defaultProps = {
  country: "in",
  pageSize: 8
}
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number
}
export default News