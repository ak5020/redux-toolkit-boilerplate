import React from "react";

import { Link, NavLink } from "react-router-dom";
// import { SearchField } from 'components/SearchField/SearchField';
import { svgIcons } from "../assets/svg";
import { Disclosure, Menu } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Tooltip } from "flowbite-react";

const Header = () => {
  // Hooks
  // const dispatch = useDispatch()
  // State
  // const [isIcon, setIsIcon] = useState(true)
  // const [openSearch, setOpenSearch] = useState(false)
  // Extract
  // const cartItemsLength = cartData?.cartItems?.length
  // const wishlistItemsLength = wishListData?.items?.length
  // const searchFunction = () => {
  //   setOpenSearch(!openSearch)
  //   setIsIcon(!isIcon)
  // }
  const addDataPoints = () => {
    // dataPoints(extUserId, 'Order_History_Clicked', extStoreId, 'Marketplace | Nav Bar')
  };
  return (
    <Disclosure as="nav" className="bg-white shadow sticky top-0 z-20">
      {({ open }) => (
        <>
          <div>
            <div className="flex justify-between h-16">
              <div className="flex items-center ml-8">
                <div className="flex items-center">
                  <Link to="#">
                    <img
                      src={"../assets/images/repairdesk-marketplace.svg"}
                      alt={"logo"}
                      className="w-[150px] "
                    />
                  </Link>
                </div>
                {/* Search Icon & SearchInput */}
                {/* {isOnVendorPage && currentVendor !== '2ndlifephones' && */}
                <div className="ml-8 hidden lg:mr-4 lg:flex lg:items-center">
                  {/* <SearchField searchType={'VendorSearch'} width={'w-690 lg:w-[250px] xl:w-[500px] 2xl:w-690'} height={'h-9'} navigate={undefined} onSearchValueChange={undefined} setSearchValue={undefined} focus={true} /> */}
                </div>
                {/* } */}
                {/* End */}
              </div>
              <div className="flex items-center lg:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center mr-8 rounded-md text-secondary-400 hover:text-secondary-500 hover:bg-secondary-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="hidden lg:mr-4 lg:flex lg:items-center">
                <div className="divide-x-2 flex items-center mr-6">
                  <NavLink
                    to={"#"}
                    onClick={addDataPoints}
                    className={({ isActive }) =>
                      isActive
                        ? "text-primary-500 text-sm font-medium text-secondary-700 pr-6 cursor-pointer"
                        : "text-sm font-medium text-secondary-700 hover:text-secondary-500 pr-6 cursor-pointer"
                    }
                  >
                    Order History
                  </NavLink>
                  <Tooltip content="Tooltip content">
                    <NavLink
                      to={"#"}
                      className={({ isActive }) =>
                        isActive
                          ? "text-primary-500 text-sm font-medium text-secondary-700 pl-6 cursor-pointer"
                          : "text-sm font-medium text-secondary-700 hover:text-secondary-500 pl-6 cursor-pointer"
                      }
                    >
                      Low Stock Report
                    </NavLink>
                  </Tooltip>
                </div>
                {/* Cart */}
                {/* {isOnVendorPage && storeType === 'shopify' && ( */}
                <button
                  type="button"
                  // onClick={openCart}
                  className="flex-shrink-0 bg-white p-1 mr-4 text-secondary-400 rounded-full hover:text-secondary-500"
                >
                  {/* {cartData?.cartItems?.length ?
                  <span className="">
                    <span className="absolute h-5 w-5 top-3 -ml-2 flex justify-center items-center text-xs text-white rounded-full bg-red-500">{cartItemsLength}</span>
                  </span>
                  : ''
                } */}
                  {svgIcons.cart}
                </button>
                {/* )} */}
                {/* Wishlist */}
                <button
                  type="button"
                  // onClick={openWishlist}
                  className="flex-shrink-0 bg-white p-1 text-secondary-400 rounded-full hover:text-secondary-500"
                >
                  {/* {wishListData?.items?.length ?
                  <span className="">
                    <span className="absolute h-5 w-5 top-3 -ml-3 flex justify-center items-center text-xs text-white rounded-full bg-red-500" >{wishlistItemsLength}</span>
                  </span>
                  :
                  ''
                  } */}
                  {svgIcons.ClipboardList}
                </button>
                {/* Notification */}
                {/* <Tooltip title="Coming Soon" color={'#0F766E'} className="">
                <button
                  type="button"
                  onClick={onClick}
                  className="flex-shrink-0 bg-white p-1 text-secondary-400 rounded-full hover:text-secondary-500"
                >
                  {svgIcons.notification} 
                </button>
                </Tooltip> */}
                {/* Profile dropdown */}
                <Menu as="div" className="ml-6 relative flex-shrink-0">
                  <div>
                    <Menu.Button className="bg-white cursor-default rounded-full flex text-sm">
                      <span className="sr-only">Open user menu</span>
                      {/* <Tooltip title={extStoreName} color={'#0F766E'}> */}
                      <img
                        className="h-8 w-8 rounded-full"
                        // src={`${(rdImage?.length > 0 && rdImage !== "" && rdImage !== null) ? `${process.env.REACT_APP_USER_IMAGE}/${rdImage}.jpg` : PlaceholderImg}`}
                        // src={!rdImage[0] ? PlaceholderImg : `${process.env.REACT_APP_USER_IMAGE}/${rdImage}.jpg`}
                        src="../assets/images/placeholder-image.png"
                        alt=""
                      />
                      {/* </Tooltip> */}
                    </Menu.Button>
                  </div>
                </Menu>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="lg:hidden">
            <div className="pt-2 pb-3 space-y-1">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-secondary-600 hover:bg-secondary-50 hover:border-secondary-300 hover:text-secondary-800" */}
              <div className="py-2">
                <NavLink
                  to={"#"}
                  className={({ isActive }) =>
                    isActive
                      ? "bg-primary-50 border-primary-500 text-primary-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                      : "text-sm font-medium ml-5 text-secondary-700 cursor-pointer"
                  }
                >
                  Order History
                </NavLink>
              </div>
              <div className="pb-2">
                <NavLink
                  to={"#"}
                  className={({ isActive }) =>
                    isActive
                      ? "bg-primary-50 border-primary-500 text-primary-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                      : "text-sm font-medium ml-5 text-secondary-700 cursor-pointer"
                  }
                >
                  Low Stock Report
                </NavLink>
              </div>
              {/* <Link
                to="/orders"
                className="bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Order History
              </Link>
              <Link
                to="/report"
                className="border-transparent text-secondary-600 hover:bg-secondary-50 hover:border-secondary-300 hover:text-secondary-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Low Stock Report
              </Link> */}
              {/* Cart */}
              <div className="pl-3">
                {/* {isOnVendorPage && connected ? ( */}
                <button
                  type="button"
                  // onClick={openCart}
                  className="flex-shrink-0 bg-white p-1 mr-4 text-secondary-400 rounded-full hover:text-secondary-500"
                >
                  {/* {cartData?.cartItems?.length ? 
                  <span className="">
                    <span className="absolute text-white text-xs flex items-center justify-center h-5 w-5 top-[140px] left-7 rounded-full bg-red-500">{cartItemsLength}</span>
                  </span>
                  :
                  ''
                  } */}
                  {svgIcons.cart}
                </button>
                {/* )
                : ''
                } */}
              </div>
              {/* Wishlist */}
              <div className="pl-3">
                <button
                  type="button"
                  // onClick={openWishlist}
                  className="flex-shrink-0 bg-white p-1 mr-4 text-secondary-400 rounded-full hover:text-secondary-500"
                >
                  {/* {wishListData?.items?.length ?
                  <span className="">
                    <span className="absolute text-white text-xs flex items-center justify-center h-5 w-5 top-[172px] left-6 rounded-full bg-red-500" style={{marginLeft: "3px"}}>{wishlistItemsLength}</span>
                  </span>
                  :
                  ''
                  } */}
                  {svgIcons.ClipboardList}
                </button>
              </div>
              {/* Notification */}
              {/* <div className='pl-3'>
                <button
                  type="button"
                  onClick={onClick}
                  className="flex-shrink-0 bg-white p-1 text-secondary-400 rounded-full hover:text-secondary-500"
                >
                  <span className="">
                    <span className="absolute h-1.5 w-1.5 rounded-full bg-red-500 opacity-75" style={{marginLeft: "1px"}}></span>
                  </span>
                  {svgIcons.notification}
                </button>
                </div> */}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Header;
