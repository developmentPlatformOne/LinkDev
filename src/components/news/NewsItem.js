import React, {useState} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useMatch } from 'react-router-dom';
import axios from 'axios';
import LoaderComp from '../common/Loader'

const NewsItem = () => {
        const {
         params: { id },
       } = useMatch('/NewsItem/:id');

       const newIndex = (id - 1)
     
       
       const [data, setData] = useState({});
       const [loading, setLoading] = useState(true);
       const newsItemURL = `https://api.npoint.io/d275425a434e02acf2f7/News/${newIndex}`;

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
           
           <section className='newsItem'>
               {loading && <LoaderComp />}
               {!loading && (
               <Container>
                   <Row>
                    <Col xs={12} md={6} xl={6}>
                        <figure>
                            <img style={{"width": "100%"}} src={data.urlToImage} alt="news" />
                        </figure>
                    </Col>
                    <Col xs={12} md={6} xl={6}>
                        <h2>
                            {data.title}
                        </h2>
                        <p>
                            {data.content}
                        </p>
                        <p>
                            {data.description}
                        </p>
                        <div className='date'>
                        <i className='fa fa-calendar-o' aria-hidden='true'></i>  {data.publishedDate}
                        </div>
                    </Col>
                   </Row>
                    
                    
               </Container>
               )}
           </section>
       );
};

export default NewsItem;