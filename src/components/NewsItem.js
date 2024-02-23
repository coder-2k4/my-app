import React from 'react'

 
 const  NewsItem =(props)=> {
  
    let {title, description, imageurl, newsurl, author, date, source} = props;
     return (
       <div>
        <div className="card my-4">
          <span className="badge rounded-pill bg-danger">
   {source}
  </span>
  <img src={!imageurl ? "https://static.vecteezy.com/system/resources/previews/001/219/908/original/global-stock-market-or-forex-trading-graph-vector.jpg" : imageurl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href={newsurl} target="blank" className="btn btn-sm btn-primary" >Read more..</a>

  </div>
  </div> 
       </div>
      
     )
 }
 
 export default NewsItem
 
