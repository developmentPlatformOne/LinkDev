import React from 'react';
import { Container } from 'react-bootstrap';
import Loader from '../../assets/img/loader.gif';

const LoaderComp = () => {
  return (
    <footer>
        <Container>
            <div className='loader'>
                <img src={Loader} alt="loader" />
            </div>
        </Container>
    </footer>
  )
};

export default LoaderComp;