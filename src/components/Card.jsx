import React from 'react';

const Card = ({quote}) => {
    return (
        <div className='bgCard h-52 rounded-[39px] flex justify-center items-center px-6'>
          <p className='font-digitalNumbers text-letters text-sm text-center md:leading-7'>{quote.phrase}</p>
        </div>
    );
};

export default Card;