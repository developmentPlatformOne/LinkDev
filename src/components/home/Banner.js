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
  const handleCarouselSlide = (selectedIndex, e) => {
    if (selectedIndex >= data.length || selectedIndex < 0 ){
        setIndex(0);
    } else if (selectedIndex !== index) {
        setIndex(selectedIndex);
    }
  };
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  if (!data) return <div>No News</div>;
  return (
    <section className='banner'>
      <Container>
      <Row>
        <Col>
        {loading && <div>Loading ...</div>}
        {!loading && (
        <Carousel activeIndex={index} interval={null} indicators={false} controls={false} onSelect={handleSelect}>
        {data.map((item, index) => (
          <Carousel.Item key={index} className={`indicator_${item.id}`}>
            <strong  style={{color: `#${item.colorCode}`}}>Marking</strong>
            <h1>{item.title}</h1>
            <p>{item.brief}</p>
          </Carousel.Item>
        ))}

        <ol className="carousel-indicators">
            {data.map((item, itemIndex) => {
                return (
                    <li
                      key={itemIndex}
                      onClick={() => handleCarouselSlide(itemIndex,null)}
                      className={`${((itemIndex === index) ? "activeIndicator" : "")} indicator_${item.id}`}
                      style={{background: `#${item.colorCode}`}}
                      >
                    </li>
                );
              })}
        </ol>
      </Carousel>

      )}
        </Col>
        <Col>
          {/* <img src={traveller} alt="traveller" /> */}
        </Col>
      </Row>
    </Container>
  </section>
  )
}

export default Banner;