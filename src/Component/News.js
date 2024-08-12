import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner'


export class News extends Component {


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
    let url = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=7ca5aa28a57f40e29826367174fa0c6f&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true })
    let data = await fetch(url);

    let parseddata = await data.json();
    this.setState({ articles: parseddata.articles, totalResults: parseddata.totalResults, loading: false })
  }

  handlenext = async () => {

    if (!(this.state.page + 1 > Math.ceil(this.props.totalResults / this.props.pageSize))) {
      let url = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=7ca5aa28a57f40e29826367174fa0c6f&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
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
    let url = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=7ca5aa28a57f40e29826367174fa0c6f&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parseddata = await data.json()
    this.setState({
      page: this.state.page - 1,
      articles: parseddata.articles

    })
  }

  render() {
    return (
      <div className="container my-3">
        {this.state.loading && <Spinner />}

        <div className="row">

          {this.state.articles.map((element) => {
            return <div className="col-md-4" key={element.url} >

              <Newsitem title={element.title ? element.title : ""} description={element.description ? element.description.slice(0, 80) : ""} imgurl={element.urlToImage} newsurl={element.url} />

              <br></br>
            </div>

          })}
          <div className="conatiner d-flex justify-content-between">

            <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handleprev}>Previous</button>

            <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handlenext}>Next</button>

          </div>


        </div>
      </div>
    )
  }
}

export default News
