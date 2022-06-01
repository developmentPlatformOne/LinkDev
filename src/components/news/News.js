import React, {useState} from 'react';
import { Tabs, Tab, Card, Container, Row, Col } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom'
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
  
  const addDefaultSrc = (ev) => {
    ev.target.src = 'default.jpg'
  }

  if (!newsItems || !newsCat) return <div>No News</div>;
  return (
    <section className='news'>
      <h4>Media</h4>
      <h2>Top News</h2>
      <Container>
      {newsLoading && <div>Loading</div>}
      {!newsLoading && (
        <div>
        <Tabs defaultActiveKey="Technology" id="uncontrolled-tab-example" className="mb-3">
          {newsCat.map((item, index) => (
            getNewsByCategory(item.id.toString()).length === 0 ? null :
              <Tab key={index} eventKey={item.name} title={item.name}>
                <Row>
                {getNewsByCategory(item.id.toString()).map((newsItem, newsIndex) => (
                  <Col xs={12} md={6} xl={4} key={newsIndex}>
                    <Card onClick={() => navigate(newsItem.id)} >
                      <figure>
                        <Card.Img variant="top" onError={addDefaultSrc} alt={truncate(newsItem.title, 20)} src={newsItem.urlToImage} />
                      </figure>
                      <Card.Body>
                        <Card.Title>{truncate(newsItem.title, 100)}</Card.Title>
                          <div className='card-date'>
                            <i className='fa fa-calendar-o' aria-hidden='true'></i> 
                            {newsItem.publishedDate}
                          </div>
                          <div className='category'>
                            {item.name}
                          </div>
                          <div className='card-action'>
                            <i className='fa fa-heart-o' aria-hidden='true'></i>
                            <i className='fa fa-share-alt' aria-hidden='true'></i>
                          </div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
              </Tab>
            
          ))}


        </Tabs>
        {props.showStatus === "homeOnly" ? <Link className='seeAll' to="/News">View All News</Link> : null}
        </div>
      )}
      </Container>
    </section>
  );
};

export default NewsList;