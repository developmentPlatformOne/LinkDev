import { useEffect, useState} from 'react';
import axios from 'axios';

export const SliderData = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get('https://api.npoint.io/fee177346e7875554413');
        setData(response);
      } catch (error) {
        console.error(error)
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return {
    data,
    loading,
  };
};

export const NewsList = () => {
    const [newsData, setData] = useState({});
    const [newsDataLoading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const { data: response } = await axios.get('https://api.npoint.io/d275425a434e02acf2f7');
          setData(response);
        } catch (error) {
          console.error(error)
        }
        setLoading(false);
      };
  
      fetchData();
    }, []);
  
    return {
        newsData,
        newsDataLoading,
    };
  };

export const NewsCategory = () => {
    const [newsCatData, setData] = useState({});
    const [newsCatDataLoading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const { data: response } = await axios.get('https://api.npoint.io/91298d970c27e9a06518');
          setData(response);
        } catch (error) {
          console.error(error)
        }
        setLoading(false);
      };
  
      fetchData();
    }, []);
  
    return {
        newsCatData,
        newsCatDataLoading,
    };
};