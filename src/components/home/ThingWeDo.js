import React, {useState} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';

const ThingWeDo = () => {

    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const newsItemURL = "thingWeDo.json";

    React.useEffect(() => {

     axios.get(newsItemURL)
     .then((responses) => {
         setData(responses.data);
     })
     .catch((error) => {
       console.log(error);
     }).finally(() => {
         setLoading(false);
     })
 }, []);

  return (
    console.log(data),
    <section className='thingsWeDo'>
    <Container fluid>
        <div className='brief'>
            <h2>
                {data.title}
              <span>
                {data.subTitle}
              </span>
            </h2>
            <p>{data.description}</p>

            <div className='services'>
                {loading && <div>Loading ...</div>}
                {!loading && (
                data.services.map((item, index) => (
                <div key={index} className='service'>
                    <img src={item.imgURL} alt={item.name} />
                    <a href='#0'>
                        {item.name}
                    </a>
                </div>
                )))}
            </div>
        </div>
    </Container>
    </section>

  )
};

export default ThingWeDo;