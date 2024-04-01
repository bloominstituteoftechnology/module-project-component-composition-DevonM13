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

    const pastDates = [];

    for (let i = 1; i <= 20; i++) {
        const pastDate = new Date(newDate);
        pastDate.setDate(newDate.getDate() - i); 

        const pastDateFormatted = [
            `${weekdays[pastDate.getUTCDay()]} 
            ${months[pastDate.getUTCMonth()]} 
            ${pastDate.getUTCDate()}, 
            ${pastDate.getUTCFullYear()}`
        ]

        pastDates.push(pastDateFormatted);
    };

    // const handleChange = (evt) => {
    //     if (evt.target.value === pastDates) {
    //         return pastDates.data
    //     }
    // };
   
     console.log(pastDates);
    return (
        <div className='centered'>
            <select>
                <option selected disabled hidden>Select a different day!</option>
                {
                    pastDates.map(date => {
                        return (
                            <option>{ date }</option>
                        )
                    })
                }
            </select>
            <h2>{data.title}</h2>
            <p>{activeDate}</p>
            <img src={data.url}/>
            <h3>Shout out to {data.copyright} for this amazing photo!</h3>
            <p>{data.explanation}</p>
        </div>
    );
};