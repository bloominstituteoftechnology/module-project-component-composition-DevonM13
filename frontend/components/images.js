import React from 'react';
import Image from './image';

export default function Images(props) {
    const {data} = props;

    return (
        <div>
            {/* {
                data.map((res, idx) => {
                    return <Image key={idx} data={res}/>
                })
            } */}
            <Image data={data} />
        </div>
    );
};