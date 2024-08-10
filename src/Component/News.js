import React, { Component } from 'react'
import Newsitem from './Newsitem'


export class News extends Component {

  articles=[

    {
      "source": {
          "id": "google-news",
          "name": "Google News"
      },
      "author": "Yahoo Sports",
      "title": "USA vs. Australia score, live updates: A'ja Wilson and Co. look to advance to Paris Olympics gold medal game - Yahoo Sports",
      "description": null,
      "url": "https://news.google.com/rss/articles/CBMi4gFBVV95cUxNWk1EanFMMXdjVFlXZkhTQWpMelFCVUIxdmlvUnhVVWpObzZOeVk5QTBFcFlGeTJsTnd2WUJOYXR5Q1VzRXRORUVrYkRSZEVuQkgxVEpEMlRob2hzSGRYbWtMNkpjZ09wMEZ2QlpwYmtQRnpfR2RwRHJHR0RkNXdXdzdFMEhlQ3NtSE5qRHVkeFJZbzFWVmpNamxxa0hRMVRzTkJKeWtianZYbmZvdk1IaWtxSVpFcGJkc2xRaVZZcDZ3eWZ6Wkp0Ql9aX0pEcnZFbERVV1NtaEFvN1RkMEJsOFhR?oc=5",
      "urlToImage": null,
      "publishedAt": "2024-08-09T16:40:52Z",
      "content": null
  },
  {
      "source": {
          "id": "google-news",
          "name": "Google News"
      },
      "author": "The Washington Post",
      "title": "Why a growing mpox outbreak has the world worried again - The Washington Post",
      "description": null,
      "url": "https://news.google.com/rss/articles/CBMiiAFBVV95cUxOV01sYjA5LXF0MkJINlhHa2h6V29fMTB6ejJCQWlBZXpLOVVseDF3U2paallQdjFjbWdnQ2piNjdFTzlqU0tyRE1LVDk1M3NTZUhNSDBHQkJ4RzR5VHJmQ0hMSlh0Zl9JaVNlNXFJb29jdjA2RVM0QnhrSnJPc2hoRzhiQmNNUEo1?oc=5",
      "urlToImage": null,
      "publishedAt": "2024-08-09T16:26:29Z",
      "content": null
  },
  ]

  constructor()
  {
    super();
    console.log("hi");
    this.state={
      
    }
  }


  render() {
    return (
      <div className="container my-3">
        <div className="row">
          <div className="col-md-4">

            <Newsitem />
          </div>
          <div className="col-md-4">

            <Newsitem />
          </div>
          <div className="col-md-4">

            <Newsitem  title="mytitle" description="this is a news"/>
          </div>

        </div>
      </div>
    )
  }
}

export default News
