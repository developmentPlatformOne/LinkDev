import React, { Fragment } from 'react';
import Banner from './Banner';
import NewsList from '../news/News';

const showStatus = "homeOnly";

const Home = () => {
  return (
    <Fragment>
      <Banner />
      {/* <NewsList showStatus={showStatus} /> */}
    </Fragment>
  )
};

export default Home;