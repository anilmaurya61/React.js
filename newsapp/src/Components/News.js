import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  componentDidMount(){
    let url =  "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=be865a327f7649e488eb1e05e234f395";
    let data = fetch(url);
    console.log(articals);
  }
  constructor(props) {
    super(props);
    this.state = {
      articals : this.articals,
      loading : false
    };
  }
  render() {

    return (
      <div className='container my-3'>
        <h1>Today's News HeadLines</h1>
        <div className="row">
          {this.state.articals.map((element)=>{
              return <div className="col-md-4" key={element.url}>
                <NewsItem title={element.title.slice(0,10)} description={element.description.slice(0,65)} imgUrl={element.urlToImage}/>
              </div>
          })}
        </div>
      </div>
    )
  }
}

export default News