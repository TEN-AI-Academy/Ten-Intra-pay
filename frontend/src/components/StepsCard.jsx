import React from 'react';

const StepsCard = ({ step, text, heading="" }) => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      {step && <div className="uppercase text-blue-800 font-semibold mx-auto text-center text-lg">
        Step {step}
      </div>}
      <div className="relative my-2">
        <img
          src="/images/customer-service.png"
          alt="Customer Service"
          className="w-10 absolute left-6 top-4 hover:animate-shake"
        />
        <img src="./images/hexagon.png" alt="Hexagon" className="w-22" />
      </div>
      {heading && <div className='uppercase text-lg text-blue-900 font-semibold'>{heading}</div>}
      <div className="my-3 text-center text-sm">{text}</div>
    </div>
  );
};

export default StepsCard;