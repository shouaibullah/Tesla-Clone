import React from 'react';

const MobileMenuItem = ({ title }) => {
  return (
    <div className=" h-10 hover:bg-slate-200 flex cursor-pointer items-center w-[90%] ml-4 pl-4 rounded-full text-[15px] delay-300">
      {title}
    </div>
  );
};

export default MobileMenuItem;
