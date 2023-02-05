import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
     let { title, description, imgUrl, newsUrl } = this.props;
    return (
      <div>
        <div className="card my-2" style={{width: "18rem"}}>
          <img src={!imgUrl?'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2sEFvlg1MoOK66PeISVHTPsnVNEp44kTzfQ&usqp=CAU':imgUrl}/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={newsUrl} target="_blank" className="btn btn-sm btn-secondary-emphasis">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem