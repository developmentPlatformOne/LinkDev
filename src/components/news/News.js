import React, {useState, useEffect} from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import axios from 'axios';




const NewsList = (props) => {
  const [newsItems, setNewsItems] = React.useState({});
  const [newsLoading, setNewsLoading] = useState(true);
  const [newsCat, setNewsCat] = useState({});

  const newsURL = "https://api.npoint.io/d275425a434e02acf2f7";
  const newsCatURL = "https://api.npoint.io/91298d970c27e9a06518";

  const requestNews = axios.get(newsURL);
  const requestNewsCat = axios.get(newsCatURL);

  React.useEffect(() => {

      axios.all([requestNews, requestNewsCat])
      .then((axios.spread((...responses) => {
        setNewsItems(responses[0].data.News);
        setNewsCat(responses[1].data.newsCategory);
      })))
      .catch((error) => {
        console.log(error);
      }).finally(() => {
        setNewsLoading(false);
      })
  }, []);

  const getNewsByCategory = category => {
    let newsArr = [];
    props.showStatus === "homeOnly" ? 
    newsItems.filter(newsItem => newsItem.categoryID === category && newsItem.showOnHomepage === "yes").map(newsItem => newsArr.push(newsItem)) : 
    newsItems.filter(newsItem => newsItem.categoryID === category).map(newsItem => newsArr.push(newsItem))
    return (
      newsArr
    )
  };
  
  // Usage:
  

  

  if (!newsItems || !newsCat) return <div>No News</div>;
  return (
    <div>
    {newsLoading && <div>Loading</div>}
    {!newsLoading && (
      <Tabs defaultActiveKey="Technology" id="uncontrolled-tab-example" className="mb-3">
        {newsCat.map((item, index) => (
          getNewsByCategory(item.id.toString()).length === 0 ? null :
           <Tab key={index} eventKey={item.name} title={item.name}>
            {getNewsByCategory(item.id.toString()).map((newsItem, newsIndex) => (
                <div key={newsIndex}>
                  <i className='fa fa-heart-o' aria-hidden='true'></i>
                  <div>{newsItem.id}</div>
                  <div>{newsItem.title}</div>
                  <div>{newsItem.content}</div>
                  <div><strong>Cat ID</strong>{newsItem.categoryID}</div>
                  <div>{newsItem.urlToImage}</div>
                  <div>{newsItem.description}</div>
                  <div>{newsItem.publishedDate}</div>
                  <div>{newsItem.showOnHomepage}</div>
              </div>
            ))}

           </Tab>
        ))}


      </Tabs>
    )}
    </div>
  );
};



export default NewsList;

/*
     */