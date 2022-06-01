import React, { Fragment } from 'react';
import Banner from './Banner';
import NewsList from '../news/News';
import ThingWeDo from './ThingWeDo'

const showStatus = "homeOnly";

const Home = () => {
  return (
    <Fragment>
      <Banner />
      <ThingWeDo />
      <NewsList showStatus={showStatus} />
    </Fragment>
  )
};

export default Home;