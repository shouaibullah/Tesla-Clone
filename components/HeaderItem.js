import React from 'react';

const HeaderItem = ({ title }) => {
  return (
    <div className="text-[15px] cursor-pointer hover:bg-gray-200/30 px-2 rounded-full delay-300 transform ease-in-out ">
      {title}
    </div>
  );
};

export default HeaderItem;
