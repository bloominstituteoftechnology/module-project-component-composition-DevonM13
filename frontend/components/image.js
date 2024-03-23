import React from 'react';

export default function Image(props) {
    const { data } = props;
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const newDate = new Date(data.date);

    const activeDate = 
    `${weekdays[newDate.getUTCDay()]} 
    ${months[newDate.getUTCMonth()]} 
    ${newDate.getUTCDate()}, 
    ${newDate.getUTCFullYear()}`;
   
     console.log(activeDate);
    return (
        <div className='centered'>
            <h2>{data.title}</h2>
            <p>{activeDate}</p>
            <img src={data.url}/>
            <h3>Shout out to {data.copyright} for this amazing photo!</h3>
            <p>{data.explanation}</p>
        </div>
    );
};