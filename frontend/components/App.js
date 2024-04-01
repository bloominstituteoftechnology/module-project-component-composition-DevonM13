import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Image from './image';

export default function App() {
  const [data, setData] = useState('');
  useEffect(() => {
    function fetchApi() {
      axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(res => {
        console.log(res.data);
        setData(res.data);
      })
      .catch(err => {
        console.error(err);
      })
    }
    fetchApi();
  }, []);
  return (
    <div>
      <Image data={data}/>
    </div>
  )
}

