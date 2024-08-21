import React, { Component } from 'react'

const Newsitem = (props) => {
  let { title, description, imgurl, newsurl, author, date } = props
  return (
    <div>

      <div className="card" style={{ width: '18rem' }} >
        <img src={imgurl ? imgurl : "https://t4.ftcdn.net/jpg/04/16/89/67/360_F_416896765_ic900ZkX6j6KQ8yXAY3RraR04VJ83mlb.jpg"} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}..</h5>
          <p className="card-text">
            {description}    </p>
          <p className="card-text"><small class="text-body-secondary">updated by {author ? author : "Unknown"} on {date} </small></p>

          <a href={newsurl} target="_blank" className="btn btn-sm btn-primary">Readmore</a>
        </div>
      </div>


    </div>
  )
}


export default Newsitem
