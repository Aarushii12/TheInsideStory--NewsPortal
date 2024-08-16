import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner'

export class News extends Component {

  static defaultProps = {
    country: 'in',
    pageSize: 6,
    category: 'general'
  }

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
  }

  async updatednews() {

    // for addingmloader: 
    this.props.setProgress(0);

    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;

    this.setState({ loading: true })

    let data = await fetch(url);
    let parseddata = await data.json();
    this.setState({ articles: parseddata.articles, totalResults: parseddata.totalResults, loading: false })

    this.props.setProgress(100);

  }

  async componentDidMount() {
    this.updatednews();
  }

  handlenext = async () => {
    {
      this.setState({ page: this.state.page + 1 });
      this.updatednews();

    }
  }

  handleprev = async () => {
    {
      this.setState({ page: this.state.page - 1 });
      this.updatednews();

    }
  }

  render() {
    return (
      <div className="container my-3">
        <h1 className='text-center' style={{ margin: '35px 0px' }}> INSIDE STORY-Top Headlines from {this.props.category}</h1>


        {this.state.loading && <Spinner />}
        <div className="row">

          {!this.state.loading && this.state.articles.map((element) => {
            return <div className="col-md-4" key={element.url} >
              <br></br>
              <Newsitem title={element.title ? element.title.slice(0, 42) : ""} description={element.description ? element.description.slice(0, 80) : ""} imgurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} />
              <br></br>
            </div>

          })}
          <div className="conatiner d-flex justify-content-between">

            <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handleprev}>previous</button>

            <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handlenext}>next</button>

          </div>


        </div>
      </div>
    )
  }
}

export default News
