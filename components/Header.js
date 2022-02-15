import React from 'react';
import Image from 'next/image';
import HeaderItem from './HeaderItem';
import { useState } from 'react';
import MobileMenu from './MobileMenu';
import { signIn, useSession, signOut } from 'next-auth/react';

const Header = ({ providers }) => {
  const [menu, setMenu] = useState(false);
  const { data: session } = useSession();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <header className="flex justify-between pt-4 lg:px-12 px-10 sticky top-0 z-50">
      <div className=" cursor-pointer" onClick={scrollToTop}>
        <Image
          src="https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png"
          alt=""
          width={110}
          height={15}
          objectFit="contain"
        />
      </div>
      <div className="lg:flex space-x-6 hidden">
        <HeaderItem title="Model S" />
        <HeaderItem title="Model 3" />
        <HeaderItem title="Model X" />
        <HeaderItem title="Model Y" />
        <HeaderItem title="Solar Roof" />
        <HeaderItem title="Solar Panels" />
      </div>
      <div className="lg:flex space-x-5 hidden">
        <HeaderItem title="Shop" />
        {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            {session && (
              <div className="h-8 w-10 rounded-full" onClick={() => signOut()}>
                <Image
                  src={session.user?.image}
                  width={30}
                  height={30}
                  className="rounded-full"
                  alt=""
                />
              </div>
            )}
            {!session && (
              <button
                className="border-2 px-2 rounded-md"
                onClick={() => signIn(provider.id)}
              >
                Sign in
              </button>
            )}
          </div>
        ))}
        <div onClick={() => setMenu(!menu)}>
          <HeaderItem title="Menu" />
        </div>
      </div>
      <div
        className=" lg:hidden bg-slate-100 px-4 py-1 rounded-full cursor-pointer bg-opacity-50"
        onClick={() => setMenu(!menu)}
      >
        Menu
      </div>
      {menu && <MobileMenu setMenu={setMenu} />}
    </header>
  );
};

export default Header;
