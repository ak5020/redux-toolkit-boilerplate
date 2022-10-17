import React from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import VendorCards from '../components/VendorCards'

export const MarketplaceHome = () => {
  return (
    <div>
        <div className='banner'>
            <Banner />
        </div>
        <div className='vendors'>
            <VendorCards />
        </div>
    </div>
  )
}
