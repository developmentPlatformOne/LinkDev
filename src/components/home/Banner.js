import React, { useState } from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import traveller from '../../assets/img/traveller.png';

const Banner = () => {

  const slidesURL = "https://api.npoint.io/fee177346e7875554413";
  const requestSlides = axios.get(slidesURL);

  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    axios.all([requestSlides])
    .then((axios.spread((...responses) => {
      setData(responses[0].data.slides.sort((a, b) => {
        return a.order - b.order;
    }));
    })))
    .catch((error) => {
      console.log(error);
    }).finally(() => {
      setLoading(false);
    })
}, []);

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  if (!data) return <div>No News</div>;
  return (
    <Container fluid>
    <Row>
      <Col>
      {loading && <div>Loading ...</div>}
      {!loading && (

      <Carousel activeIndex={index} onSelect={handleSelect}>
      {data.map(item => (
        <Carousel.Item key={item.id}>
          <div>{item.brief}</div>
          <div>{item.title}</div>
          <div>{item.colorCode}</div>
        </Carousel.Item>
      ))}
    </Carousel>

    )}
      </Col>
      <Col>
        <img src={traveller} alt="traveller" />
      </Col>
    </Row>
  </Container>
  )
}

export default Banner;