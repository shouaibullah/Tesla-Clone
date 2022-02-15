import React from 'react';
import MobileMenuItem from './MobileMenuItem';

const MobileMenu = ({ setMenu }) => {
  setMenu(true);
  return (
    <>
      <div
        className=" h-screen w-screen  absolute top-0 right-0 z-[900] backdrop-blur-sm"
        onClick={() => setMenu(false)}
      />
      <div className="h-screen w-64 bg-slate-50 absolute top-0 right-0 overflow-x-scroll z-[1000] pt-16 space-y-2">
        <MobileMenuItem title="Model S" />
        <MobileMenuItem title="Model 3" />
        <MobileMenuItem title="Model X" />
        <MobileMenuItem title="Model Y" />
        <MobileMenuItem title="Solar Roof" />
        <MobileMenuItem title="Solar Panel" />
        <MobileMenuItem title="Existing Inventory" />
        <MobileMenuItem title="Used Inventory" />
        <MobileMenuItem title="Trade-In" />
        <MobileMenuItem title="test Drive" />
        <MobileMenuItem title="Powerwell" />
        <MobileMenuItem title="Commercial Energy" />
        <MobileMenuItem title="Utilities" />
        <MobileMenuItem title="Charging" />
        <MobileMenuItem title="Find Us" />
        <MobileMenuItem title="Support" />
        <MobileMenuItem title="Investor Relations" />
        <MobileMenuItem title="Account" />
        <MobileMenuItem title="More" />
      </div>
    </>
  );
};

export default MobileMenu;
