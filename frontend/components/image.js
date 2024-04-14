import React from 'react';
import styled from 'styled-components';



export default function Image({ data, darkmode, darkmodeOn }) {
    // adding styling //  
    const StyledDiv = styled.div`
        background-color: ${pr => darkmodeOn ? pr.theme.black : pr.theme.white};
        color: ${pr => darkmodeOn ? pr.theme.white : pr.theme.black};
        cursor: pointer;
        img {
        border-radius: 7%;
        border: 2px solid ${pr => darkmodeOn ? pr.theme.white : pr.theme.
        black};
        }
        button, select, option {
            border-radius: 10%;
            border: 3px solid ${pr => darkmodeOn ? pr.theme.tertiaryColor : pr.theme.black};
            background-color: ${pr => darkmodeOn ? pr.theme.secondaryColor : pr.theme.secondaryColor}
        } 
    `

    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    // getting today's date to be displayed  // 
    const newDate = new Date(data.date);

    const activeDate = 
    `${weekdays[newDate.getUTCDay()]} 
    ${months[newDate.getUTCMonth()]} 
    ${newDate.getUTCDate()}, 
    ${newDate.getUTCFullYear()}`;

    const pastDates = [];
    // allowing access to the past 20 days of photos // 
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
    }
   
     console.log(data);

    return (
        <StyledDiv className='centered'>
            <header>
                <h1>NASA Photo of the Day</h1>
            </header>
            <div>
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
                <button onClick={() => darkmode()}>Darkmode on or off</button> 
            </div>
            <h2>{data.title}</h2>
            <p>{activeDate}</p>
            <img src={data.url}/>
            <h3>Shout out to {data.copyright} for this amazing photo!</h3>
            <p>{data.explanation}</p>
        </StyledDiv>
    );
};