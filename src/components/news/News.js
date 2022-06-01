import React, {useState} from 'react';
import { Tabs, Tab, Card, Container, Row, Col } from 'react-bootstrap';
import {Link, useNavigate } from 'react-router-dom'
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
  
  const truncate = (str, n) => {
		return str?.length > n ? str.substr(0, n - 1) + " ..." : str;
	};
  
  const nav = useNavigate ()

  const navigate = (id) => {
      nav(`/NewsItem/${id}`)
  }
  

  if (!newsItems || !newsCat) return <div>No News</div>;
  return (
    <Container>
    {newsLoading && <div>Loading</div>}
    {!newsLoading && (
      <Tabs defaultActiveKey="Technology" id="uncontrolled-tab-example" className="mb-3">
        {newsCat.map((item, index) => (
          getNewsByCategory(item.id.toString()).length === 0 ? null :
            <Tab key={index} eventKey={item.name} title={item.name}>
              <Row>
              {getNewsByCategory(item.id.toString()).map((newsItem, newsIndex) => (
                <Col xs={12} sm={6} md={4} key={newsIndex}>
                  <Card onClick={() => navigate(newsItem.id)} >
                    <Card.Img variant="top" src={newsItem.urlToImage} />
                    <Card.Body>
                      <Card.Title>{truncate(newsItem.title, 70)}</Card.Title>
                        <div className='card-date'>
                          <i className='fa fa-calendar-o' aria-hidden='true'></i> 
                          {newsItem.publishedDate}
                        </div>
                        <div className='card-action'>
                          <i className='fa fa-heart-o' aria-hidden='true'></i>
                          <i className='fa fa-share-alt' aria-hidden='true'></i>
                        </div>
                    </Card.Body>
                  </Card>
                </Col>

                //   <div>
                //     
                //     <div>{newsItem.id}</div>
                //     <div></div>
                //     <div></div>
                //     <div><strong>Cat ID</strong>{newsItem.categoryID}</div>
                //     <div></div>
                //     <div>{newsItem.description}</div>
                //     <div></div>
                //     <div>{newsItem.showOnHomepage}</div>
                // </div>
              ))}
            </Row>
            </Tab>
           
        ))}


      </Tabs>
    )}
    </Container>
  );
};



export default NewsList;

/*
     */