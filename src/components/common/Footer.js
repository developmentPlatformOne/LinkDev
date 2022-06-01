import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Logo from '../../assets/img/logo.png';
import GooglePlay from '../../assets/img/google-play.png';
import PlayStore from '../../assets/img/play-store.png';

const Footer = () => {
  return (
    <footer>
        <Container>
            <Row>
                <Col xs={12} md={6} xl={3}>
                  <img className='logo' src={Logo} alt="logo" />
                  <p>
                    We make technology produce productive, adaptable and sustainable business experiences.
                  </p>
                </Col>

                <Col xs={12} md={6} xl={6}>
                  <Row>
                    <Col xs={12} md={6} xl={4}>
                      <h3>
                        Company
                      </h3>
                      <ul>
                        <li><a href='#0'>About</a></li>
                        <li><a href='#0'>Careers</a></li>
                        <li><a href='#0'>Mobile</a></li>
                      </ul>
                    </Col>
                    <Col xs={12} md={6} xl={4}>
                      <h3>
                        Contact
                      </h3>
                      <ul>
                        <li><a href='#0'>Help/FAQ</a></li>
                        <li><a href='#0'>Press</a></li>
                        <li><a href='#0'>Affilates</a></li>
                      </ul>
                    </Col>
                    <Col xs={12} md={6} xl={4}>
                      <h3>
                        Media
                      </h3>
                      <ul>
                        <li><a href='#0'>News</a></li>
                        <li><a href='#0'>Photo</a></li>
                        <li><a href='#0'>Video</a></li>
                      </ul>
                    </Col>
                  </Row>
                </Col>

                <Col xs={12} md={6} xl={3}>
                  <ul className='social'>
                    <li>
                      <a href='#0'>
                        <i class="fa fa-facebook" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href='#0'>
                        <i class="fa fa-instagram" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href='#0'>
                        <i class="fa fa-twitter" aria-hidden="true"></i>
                      </a>
                    </li>
                  </ul>
                  <h4>Discover Our App</h4>
                  <ul className='app'>
                    <li>
                      <img src={GooglePlay} alt="logo" />
                    </li>
                    <li>
                      <img src={PlayStore} alt="logo" />
                    </li>
                  </ul>
                </Col>
            </Row>
            <Row>
              <p className='copyright'>
                All rights reserved@Linkdevelopment.com
              </p>
            </Row>
        </Container>
    </footer>
  )
};

export default Footer;