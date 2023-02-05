import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles : this.articles,
      loading : false,
      page : 1,
    };
  }
  async componentDidMount(){
    let url =  `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=be865a327f7649e488eb1e05e234f395&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading : true});
    let data =await fetch(url);
    let parseData = await data.json();
    console.log(parseData); 
    this.setState({articles: parseData.articles, totalArticles : parseData.totalResults, loading : false});
  }
  handlePagination =async(Pages)=>{
      console.log(Pages);
      let url =  `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=be865a327f7649e488eb1e05e234f395&page=${Pages}&pageSize=${this.props.pageSize}`;
      this.setState({loading : true});
      let data =await fetch(url);
      let parseData = await data.json();
      this.setState({articles: parseData.articles, page: Pages, totalArticles : parseData.totalResults, loading : false});
  }
  handleNextPage =async()=>{
    if(this.state.page+1 > Math.ceil(this.state.totalArticles/15)){
      alert("This is last Page");
    }else{
      console.log(this.state.page);
      this.handlePagination(this.state.page+1);
      }
    }
  handlePrePage =async()=>{
    if(this.state.page<1){
      alert("This is the First Page");
    }
    else{
      this.handlePagination(this.state.page-1);
    }
  }
  
  render() {

    return (
      <div className='container my-3'>
        <h1 className='text-center'>Today's News HeadLines</h1>
        { this.state.loading && <div className="container text-center">
          <button class="btn btn-primary mx-2" type="button" disabled>
          <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
          <span class="visually-hidden">Loading...</span>
          </button>
          <button class="btn btn-primary" type="button" disabled>
            <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
            Loading...
          </button>
        </div>}
        {!this.state.loading &&<div className="row">
          {this.state.articles && this.state.articles.map((element)=>{
              return <div className="col-md-4" key={element.url}>
                <NewsItem title={element.title} description={element.description} imgUrl={element.urlToImage} newsUrl ={element.url}/>
              </div>
          })}
        </div>}
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-end my-2">
            <li className="page-item disable">
              <li className="page-link" onClick={this.handlePrePage}>Previous</li>
            </li>
            <li className="page-item"><a className="page-link" href="/">{this.state.page+1}</a></li>
            <li className="page-item">
              <li className="page-link" onClick={this.handleNextPage}>Next</li>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
} 

export default News