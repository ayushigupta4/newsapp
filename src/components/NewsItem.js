import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl, author, date, source} = this.props; 
    return (
      <div className='my-3'>
            <div className="card">
              <div style={{display:'flex', 
                justifyContent: 'flex-end',
                position: 'absolute',
                right: '0'
              }}> 
                <span className="badge bg-danger">{source}</span>
              </div>
            
                <img src={imageUrl?imageUrl:"https://img.freepik.com/free-photo/white-paper-texture_1194-5998.jpg?w=740&t=st=1711971862~exp=1711972462~hmac=606fec35c59f3e1e624888b96901c3554153a75b48b20924a367cab9b81db4d4"} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-body-secondary">By {author?author: "Unknown"} on {new Date(date).toGMTString()}</small></p>
                    <a rel='noreferrer' href={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read more</a>
                </div>
            </div>
      </div>
    )
  }
}

export default NewsItem
