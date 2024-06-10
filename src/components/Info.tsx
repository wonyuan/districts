import React, { useEffect } from 'react';


const Info: React.FC<{ data: { name: string; }  }> = ({ data }) => {    
    return (
        <div>
            <h1>welcome to 25 districts</h1>
            <b className='text-2xl'>{data.name}</b>
        </div>
    );
}

export default Info;