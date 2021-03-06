import React, { useState } from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import traveller from '../../assets/img/traveller.png';
import LoaderComp from '../common/Loader'

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
        <Col md={6}>
        {loading && <LoaderComp />}
        {!loading && (
        <Carousel activeIndex={index} interval={null} indicators={false} controls={false} onSelect={handleSelect}>
        {data.map((item, index) => (
          <Carousel.Item key={index} className={`indicator_${item.id}`}>
            <strong  style={{color: `#${item.colorCode}`}}>Marking</strong>
            <h1>
              <span className='text'>{item.title}</span>
              <span className='vector'>
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                width="326.000000pt" height="66.000000pt" viewBox="0 0 326.000000 66.000000"
                preserveAspectRatio="xMidYMid meet">
                <g transform="translate(0.000000,66.000000) scale(0.100000,-0.100000)"
                fill={`#${item.colorCode}`} stroke="none">
                <path d="M520 644 c-25 -11 -79 -17 -190 -20 -244 -6 -242 -8 15 -14 l240 -6
                -259 -2 c-143 -1 -256 -5 -252 -9 4 -4 107 -9 228 -10 122 -2 224 -6 227 -8 2
                -3 -72 -5 -165 -6 -93 0 -191 -4 -219 -8 -49 -7 -50 -7 -17 -15 18 -4 30 -12
                26 -17 -3 -5 11 -9 31 -9 22 0 38 -6 41 -15 7 -17 64 -35 116 -35 20 0 40 -4
                43 -10 3 -5 -1 -10 -9 -10 -9 0 -16 -4 -16 -10 0 -5 15 -10 33 -10 17 0 65 -6
                105 -14 40 -8 92 -12 115 -10 l42 3 -50 -13 c-29 -8 -108 -15 -185 -16 l-135
                -2 40 -19 40 -18 -37 -1 c-40 0 -51 -9 -38 -30 6 -9 13 -11 22 -4 7 5 38 7 68
                4 l55 -5 -45 -9 c-44 -9 -45 -9 -15 -16 19 -5 23 -8 11 -9 -37 -2 -2 -21 59
                -32 33 -6 64 -17 68 -25 4 -8 21 -14 36 -14 44 0 145 -23 158 -35 18 -19 138
                -27 383 -26 124 0 241 -4 260 -9 28 -7 18 -9 -48 -6 -46 1 -77 -1 -70 -5 7 -5
                23 -9 36 -9 12 0 22 -4 22 -10 0 -5 11 -10 24 -10 14 0 31 -7 40 -15 8 -8 24
                -15 36 -15 12 0 27 -6 35 -13 9 -9 72 -17 206 -25 207 -13 457 -6 804 23 99 8
                252 19 340 25 88 6 174 15 190 20 17 5 70 17 118 25 191 33 220 80 52 84 -76
                2 -129 12 -113 22 9 6 6 9 -10 9 -13 0 -21 4 -18 9 3 5 -1 12 -10 15 -23 9 -9
                23 33 31 36 7 37 8 13 15 -14 4 -72 10 -128 14 -74 6 -113 14 -145 30 l-44 22
                26 19 c14 11 32 23 41 27 8 4 -7 7 -34 7 -51 1 -55 16 -6 23 14 2 24 9 23 15
                -2 7 7 15 19 19 12 4 28 12 35 19 10 10 0 14 -50 19 -34 3 -73 7 -87 10 -14 2
                -31 5 -37 5 -7 1 -13 7 -13 15 0 16 -42 30 -50 16 -8 -13 -130 -23 -130 -11 0
                7 -23 11 -55 11 -31 0 -72 7 -92 15 -19 8 -45 15 -57 15 -12 0 -26 4 -32 10
                -7 7 -37 7 -89 1 -98 -12 -199 -12 -170 0 14 5 2 8 -37 8 -31 1 -60 6 -64 12
                -5 9 -59 10 -198 6 -111 -4 -208 -3 -231 3 -23 5 -85 6 -145 2 l-105 -7 105
                -6 105 -5 -135 -1 c-80 0 -123 2 -105 7 43 11 13 13 -130 11 -66 -1 -190 5
                -275 13 -186 19 -177 19 -220 0z m53 -11 c-7 -2 -21 -2 -30 0 -10 3 -4 5 12 5
                17 0 24 -2 18 -5z m50 0 c-7 -2 -19 -2 -25 0 -7 3 -2 5 12 5 14 0 19 -2 13 -5z
                m70 0 c-7 -2 -19 -2 -25 0 -7 3 -2 5 12 5 14 0 19 -2 13 -5z m-5 -30 c-10 -2
                -28 -2 -40 0 -13 2 -5 4 17 4 22 1 32 -1 23 -4z m-260 -280 c-10 -2 -28 -2
                -40 0 -13 2 -5 4 17 4 22 1 32 -1 23 -4z m7 -43 c3 -5 -1 -10 -9 -10 -9 0 -16
                5 -16 10 0 6 4 10 9 10 6 0 13 -4 16 -10z"/>
                <path d="M388 413 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z"/>
                </g>
                </svg>
              </span>
            </h1>
            <p>{item.brief}</p>
            <div className='bannerAction'>
              <a href='#0' className='seeAll'>Find Out More</a>
              <div className='demo'>
                <button>
                  <i className="fa fa-play" aria-hidden="true"></i>
                </button>
                Play Demo
              </div>
            </div>
            
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
        <Col md={6}>
          <img className='bannerImg' src={traveller} alt="traveller" />
        </Col>
      </Row>
    </Container>
  </section>
  )
}

export default Banner;