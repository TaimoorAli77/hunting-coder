import React from 'react';

const Dummy = () => {
  return (
    <>
        <style jsx global>
            {`
            .dum{

                color:black;
                background-color:red;
            }
            `}
        </style>
      <p className='dum'>
        Dummy
        </p>
    </>
  );
}

export default Dummy;
