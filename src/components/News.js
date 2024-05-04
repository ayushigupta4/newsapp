import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
  }

  async componentDidMount() {
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=257146d026eb4bfb9639479eaf682ddd&page=1";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({articles: parsedData.articles});
  }

  handlePrevClick = ()=>{
    console.log("Previous");
  }

  handleNextClick = ()=>{
    console.log("Next");
  }
  
  render() {
    return (
      <div>
        <div className="container my-3">
          <h2>NewsFlash - Top headlines</h2>
          
          <div className="row">
            {this.state.articles.map((element)=>{
                return <div className="col-md-4" key={element.url}>
                <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url}/></div>

            })}
            
            
          </div>

          <div className="container d-flex justify-content-between">
            <button type='button' className='btn btn-dark' onClick={this.handlePrevClick}>&larr; Previous</button>
            <button type='button' className='btn btn-dark' onClick={this.handleNextClick}>Next &rarr;</button>
          </div>
          

          
        </div>
        
      </div>
    )
  }
}

export default News
