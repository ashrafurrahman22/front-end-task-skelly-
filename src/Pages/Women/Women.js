import React from 'react';
import women from '../../assets/women.gif';


const Women = () => {
    return (
        <div className='min-h-screen'>
        <h2 className="text-2xl text-amber-400 font-semibold my-5 ml-24 uppercase">Coming Soon...</h2>
        <div className='flex justify-center
        items-center'>
            <img src={women} alt="" />
        </div>
    </div>
    );
};

export default Women;