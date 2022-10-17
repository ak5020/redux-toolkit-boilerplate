import React from 'react';
import ReactDOM from "react-dom";


const Banner = () => {

  // CSS
  const width = '730px';

  return (
    <div className={`w-full 3xl:w-10/12 mx-auto 4xl:w-7/12`}>
      {/* Home Top Section */}
      <div className={`flex flex-col items-center h-52 mt-[72px] mx-[auto] mb-[25px]`}  style={{ maxWidth: width }}>
        <div className="flex text-5xl text-secondary-700 font-semibold" style={{minWidth: "auto", maxWidth: width}}>All your <span className="text-primary-600 mx-3">vendors</span>in one place<span className="ml-2 lg:block sm:hidden"><img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/325/star_2b50.png" alt=""width="48px" height="48px" /></span></div>
        <p className="text-lg text-center mt-6 text-secondary-500" style={{width: "640px", maxWidth: width}}>Marketplace is a one stop solution for repair parts and devices. Import from us to get your inventory managed. Order from us and never worry about creating items and purchase orders manually!</p>
      </div>
      {/* Home Banner */}
      <div className="flex justify-between xl:flex-nowrap xl:space-x-6 xl:space-y-0 lg:flex-wrap lg:space-y-6  sm:flex-wrap sm:space-x-0 sm:space-y-6 mx-6 mt-18 mb-8">
        <div className="h-72 w-full">
          <img src='../assets/images/Marketplace-banner.gif' alt='banner image' className="h-72 w-full object-fill rounded-lg"/>
        </div>
      </div>
    </div>
  )
}

export default Banner