import React from 'react';
import Image from 'next/image';
import { AuthButtons } from '../common/Button';
import Search from '../common/Search';

const Header = () => {
  return (
    <>
      <header className="w-full bg-white border border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-2">
          {/*the teal color that is on top of the logo and search bar*/}
          <div className="absolute inset-0 bg-teal-500 h-7 mb-4 font-light text-white flex items-center justify-center">
            <p>Overseas trip? Get the latest information on travel guides</p>
          </div>
          {/* Logo and main navigation container */}
          <div className="mt-6 flex items-center justify-between w-full">
            <div className='flex-shrink-0'>
            <Image
              src="/assets/Logos/alxlogo.png"
              alt="Logo"
              width={40}
              height={20}
              className="h-8 w-auto object-contain"
            />
            </div>
          

            {/* search, bar) */}
            <div className="flex items-center justify-between border border-gray-100 rounded-full px-4 py-2 w-[800px] h-[80px]">
              <div className="px-2 hover:bg-gray-100 rounded-full cursor-pointer">
                <div className="text-sm text-gray-700 font-medium">
                  Location
                </div>
                <div className="text-xs text-gray-300 mt-1">
                  Search for destination
                </div>
              </div>
              <span className="text-gray-300 ">|</span>

              {/*Check-in*/}
              <div className="px-2 hover:bg-gray-100 rounded-full cursor-pointer">
                <div className="text-sm text-gray-700 font-medium">
                  Check-in
                </div>
                <div className="text-xs text-gray-300">Add dates</div>
              </div>
              <span className="text-gray-300">|</span>

              {/*Check-out*/}
              <div className="px-2 hover:bg-gray-100 rounded-full cursor-pointer">
                <div className="text-sm text-gray-700 font-medium">
                  Check-out
                </div>
                <div className="text-xs text-gray-300">Add dates</div>
              </div>
              <span className="text-gray-300">|</span>

              {/*Guests*/}
              <div className="px-2 hover:bg-gray-100 rounded-full cursor-pointer">
                <div className="text-sm text-gray-700 font-medium">People</div>
                <div className="text-xs text-gray-300">Add guests</div>
              </div>
              <Search />
            </div>
            {/* Authentication buttons */}
            <AuthButtons />
          </div>
        </div>
      </header>

      {/*navigation*/}
      <nav className="w-full mt-4 py-2">
        <div className="flex justify-center space-x-3 overflow-x-hidden px-6">
          {[
            { name: "rooms", icon: "/assets/Logos/living-room 1.png" },
            { name: "Mansions", icon: "/assets/Logos/mansion 1.png" },
            { name: "countryside", icon: "/assets/Logos/farm 1.png" },
            { name: "Villa", icon: "/assets/Logos/villa 1.png" },
            { name: "Tropical", icon: "/assets/Logos/palm-tree 1.png" },
            { name: "New", icon: "/assets/Logos/key-chain 1.png" },
            { name: "Amazing pool", icon: "/assets/Logos/swimming-pool 1.png" },
            { name: "Beachhouse", icon: "/assets/Logos/vacations 1.png" },
            { name: "Island", icon: "/assets/Logos/island (1) 1.png" },
            { name: " Camping", icon: "/assets/Logos/tent 1.png" },
            { name: "Apartment", icon: "/assets/Logos/apartment 1.png" },
            { name: "House", icon: "/assets/Logos/home 1.png" },
            { name: "Lakefront", icon: "/assets/Logos/cottage 1.png" },
            { name: "Farmhouse", icon: "/assets/Logos/barn 1.png" },
            { name: "Cabins", icon: "/assets/Logos/cabin 1.png" },
            { name: "Castles", icon: "/assets/Logos/castle-tower 1.png" },
          ].map(({ name, icon }) => (
            <a
              href="#"
              key={name}
              className="flex flex-col items-center space-y-1 text-gray-700 hover:text-purple-600 no-underline min-w-[70px] text-center gap-x-6"
              style={{
                color: "#374151",
                textDecoration: "none",
                gap: "0.5rem",
              }}
            >
              <Image
                src={icon}
                alt={name}
                width={24}
                height={24}
                className="w-5 h-5"
              />
              <span className="text-xs">{name}</span>
            </a>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Header;
