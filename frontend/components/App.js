import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from './image';

export default function App() {
  // state
  const [data, setData] = useState('');
  const [darkmodeOn, setDarkMode] = useState(false);
  // fetching api
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

  // callback functions
  // changes darkmode on or off
  const darkmode = () => {
    if (!darkmodeOn) {
      setDarkMode(true);
    } else if (darkmodeOn) {
      setDarkMode(false);
    }
  };

  return (
    <div>
      <Image data={data} darkmode={darkmode} darkmodeOn={darkmodeOn}/>
    </div>
  )
}

