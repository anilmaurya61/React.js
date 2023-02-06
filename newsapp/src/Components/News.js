import React, { Component } from 'react'
import NewsItem from './NewsItem'
import propTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';
import Spinner from './Spinner';

export class News extends Component {
  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  static defaultProps = {
    pageSize:'9',
    category:'general'
  }
  static propTypes = {
    pageSize : propTypes.string,
    category : propTypes.string,
  }
  constructor(props) {
    super(props);
    this.state = {
      articles : [],
      loading : false,
      page : 1,
      totalResults : 0,
    };
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsMonkey`;
  }
  async componentDidMount (props) {
    let url =  `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&
    &apiKey=${this.props.apiKey}&page=${this.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading : true});
    let data =await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({
      articles: parseData.articles,
      totalResults : parseData.totalResults,
      loading : false
    });
  }
  fetchMoreData = async () => {
    this.setState({page : this.state.page+1})
    let url =  `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&
    &apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading : true});
    let data =await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parseData.articles),
      totalResults : parseData.totalResults,
      loading : false
    });
    console.log("hello");
  }
  render() {
    return (
      <div className='container my-3'>
        <h1 className='text-center'>NewsMonkey - Top {this.props.category} Headlines</h1>
        <InfiniteScroll
            dataLength={this.state.articles.length} //This is important field to render the next data
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.state.totalResults }
            loader={<Spinner/>}
            endMessage={
              <p style={{ textAlign: 'center' }}>
                <b>Yay! You have seen it all</b>
              </p>
            }
          >
            <div className="container">
            <div className="row" key={this.state.page}>
            {this.state.articles && this.state.articles.map((element)=>{
              return <div className="col-md-4" key={element.url}>
                <NewsItem title={element.title}
                 description={element.description}
                  imgUrl={element.urlToImage} 
                  newsUrl ={element.url}
                  author = {element.author}
                  date = {element.publishedAt}
                  Source = {element.source.name}/>
              </div>
          })}
          </div>
          </div>
        </InfiniteScroll>
      </div>
    )
  }
} 

export default News