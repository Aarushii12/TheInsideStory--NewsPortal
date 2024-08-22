import React, { useEffect, useState } from 'react';
import Newsitem from './Newsitem';
import Spinner from './Spinner';

const News = (props) => {

  // State initialization
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const updatedNews = async () => {
    // For adding loader
    props.setProgress(0);

    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;

    setLoading(true);

    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  }

  useEffect(() => {
    updatedNews();
  }, [page]);

  const handleNext = async () => {
    setPage(page + 1);
  }

  const handlePrev = async () => {
    setPage(page - 1);
  }

  return (
    <div className="container my-3">
      <h1 className='text-center' style={{ margin: '80px 0px' }}> INSIDE STORY - Top Headlines from {props.category}</h1>

      {loading && <Spinner />}
      <div className="row">
        {!loading && articles.map((element) => {
          return (
            <div className="col-md-4" key={element.url}>
              <br />
              <Newsitem
                title={element.title ? element.title.slice(0, 42) : ""}
                description={element.description ? element.description.slice(0, 80) : ""}
                imgurl={element.urlToImage}
                newsurl={element.url}
                author={element.author}
                date={element.publishedAt}
              />
              <br />
            </div>
          );
        })}
        <div className="container d-flex justify-content-between">
          <button disabled={page <= 1} type="button" className="btn btn-dark" onClick={handlePrev}>Previous</button>
          <button disabled={page + 1 > Math.ceil(totalResults / props.pageSize)} type="button" className="btn btn-dark" onClick={handleNext}>Next</button>
        </div>
      </div>
    </div>
  );
}

News.defaultProps = {
  country: 'in',
  pageSize: 6,
  category: 'general'
}

export default News;
