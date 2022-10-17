import React,{ Fragment } from "react"
// import Rocket from "../../assets/images/rocket.gif"
// import Guarantee from '../../assets/images/guarantee.gif'
// import DebitCard from '../../assets/images/debit-card.gif'
// import CustomerSuccess from '../../assets/images/customerSucces.gif'
// import ShippingPolicy from '../../assets/images/shipping-policy.gif'
// import ReturnPolicy from '../../assets/images/return-policy.gif'
// import Terms from '../../assets/images/terms.gif'
// import RMA from '../../assets/images/RMA.gif'
import { getYear } from "../utils/CommonFunctions"

// const navContent = [
//     { name: 'Lightning Fast Delivery', icon: Rocket, redirect: "https://www.mobilesentrix.com/shipping/"},
//     { name: 'Lifetime Warranty', icon: Guarantee, redirect: "https://www.mobilesentrix.com/return-policy/"},
//     { name: 'LCD Buyback Program', icon: DebitCard, redirect: "https://www.mobilesentrix.com/lcd-buy-back/"},
//     { name: 'Exceptional Customer Service', icon: CustomerSuccess, redirect: "https://www.mobilesentrix.com/quick-tips/"},
// ]
// const navSubContent = [
//   { name: 'Shipping Policy', linkName: 'Ampsentrix', icon: ShippingPolicy, redirect: "https://www.injuredgadgets.com/shipping-policy"},
//   { name: 'Return Policy',linkName: 'Ampsentrix', icon: ReturnPolicy, redirect: "https://www.injuredgadgets.com/return_policy/"},
//   { name: 'Terms & Conditions',linkName: 'Ampsentrix', icon: Terms, redirect: "https://www.injuredgadgets.com/term_condition/"},
//   { name: 'RMA',linkName: 'Ampsentrix', icon: RMA, redirect: "https://www.injuredgadgets.com/customer/account/login"},
// ]
  
export default function Footer() {
  // CSS varibles
  const footer_description_width = "245px"
  return (
    <footer className={`${location.pathname.includes('/vendor') ? 'bg-white' : ''} `} aria-labelledby="footer-heading">
      <div className={` sm:px-6 lg:px-8`}>
        {/* Footer Logo */}
        {/* <div className="mb-16 mt-16 flex justify-center">
          <img src={marketplaceLogo} width="168px" height="40px" alt="logo" />
        </div> */}
        {/* Footer Links */}
        {/* {location.pathname.includes('/vendor') ? 
        vendorName === 'mobile_sentrix' ? (
        <Fragment>
          <div className="flex mt-16 lg:flex-nowrap justify-center lg:flex-row lg:space-x-12 lg:space-y-0 xl:space-x-16 2xl:space-x-16 flex-wrap md:flex-col md:space-y-8 sm:space-x-0 sm:space-y-8">
            {navContent.map((nav, i) => (
              <a href={nav.redirect} target="_blank" key={i} className="text-center" rel="noreferrer">
                <div className="flex cursor-pointer justify-center mb-4">
                  <img src={nav.icon} alt="" width={"36px"} height={"36px"} />
                </div>
                <a href={nav.redirect} target="_blank" className="text-base font-bold text-secondary-500 hover:text-primary-600 tracking-wider" rel="noreferrer">{nav.name}</a>
              </a>
            ))}
          </div>
      </Fragment>
      )
      : vendorName === 'injured_gadgets' ? (
        <Fragment>
          <div className="flex mt-16 lg:flex-nowrap justify-center lg:flex-row lg:space-x-12 lg:space-y-0 xl:space-x-16 2xl:space-x-16 flex-wrap md:flex-col md:space-y-8 sm:space-x-0 sm:space-y-8">
            {navSubContent.map((navSub, i) => (
              <a href={navSub.redirect} target="_blank" key={i} className="text-center" rel="noreferrer">
                <div className="cursor-pointer flex justify-center mb-4">
                  <img src={navSub.icon} alt="" width={"36px"} height={"36px"} />
                </div>
                <a href={navSub.redirect} target="_blank" className="text-base font-bold text-secondary-500 hover:text-primary-600 tracking-wider" rel="noreferrer">{navSub.name}</a>
              </a>
            ))}
          </div>
        </Fragment>
      )
        : ''
        : ''
        } */}
        <div className='my-8'>
          <p className="text-sm text-secondary-400 text-center">Copyright {getYear()} RepairDesk, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
  