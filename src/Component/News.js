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
    console.log("hi");
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
  }

  async componentDidMount() {

    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7ca5aa28a57f40e29826367174fa0c6f&page=${this.state.page}&pageSize=${this.props.pageSize}`;


    this.setState({ loading: true })

    let data = await fetch(url);
    let parseddata = await data.json();
    this.setState({ articles: parseddata.articles, totalResults: parseddata.totalResults, loading: false })
  }


  handlenext = async () => {

    if (!(this.state.page + 1 > Math.ceil(this.props.totalResults / this.props.pageSize))) {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7ca5aa28a57f40e29826367174fa0c6f&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      let data = await fetch(url);
      this.setState({ loading: true });
      let parseddata = await data.json()
      this.setState({
        page: this.state.page + 1,
        articles: parseddata.articles,
        loading: false
      })
    }
  }

  handleprev = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7ca5aa28a57f40e29826367174fa0c6f&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    this.setState({ loading: true });
    let parseddata = await data.json()
    this.setState({
      page: this.state.page - 1,
      articles: parseddata.articles,
      loading: false
    })
  }

  render() {
    return (
      <div className="container my-3">

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
