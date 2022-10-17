import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Badges } from "./Badges";
import { svgIcons } from "../assets/svg";
import { Link } from "react-router-dom";
import { changeName, increment } from "../store/modules/counterSlice";
import { getTasks } from "../store/modules/counter.thunk";

// Dummy Data
const cardData = [
  { title: "Mobile Sentrix" },
  { title: "Injured Gadgets" },
  { title: "Rounded" },
  { title: "Rounded" },
  { title: "Rounded" },
  { title: "Rounded" },
];
const RedirectToVendorPage = (data) => {
  window.scrollTo(0, 0);
};

const VendorCards = () => {
  // Hooks
  const dispatch: any = useDispatch();
  const count = useSelector((state: any) => state.counter.value);
  const todos = useSelector((state: any) => state.counter.tasks);
  const name = useSelector((state: any) => state.counter.name);
  // Map values
  const todosMap = todos?.map((todo) => todo.title);
  console.log("todos state", todos);
  // States
  const [isCard, setIsCard] = useState(true);
  const changeView = () => {
    setIsCard(!isCard);
  };
  // Function
  const changeText = () => {
    dispatch(changeName("abdullah"));
  };
  // useEffect
  useEffect(() => {
    dispatch(getTasks());
  }, []);
  return (
    <Fragment>
      <div className="mb-15">
        <div className="mx-6">
          <div className="flex items-center justify-between">
            <p
              onClick={() => dispatch(increment())}
              className="text-2xl font-semibold text-secondary-700"
            >
              Vendors{count}
            </p>
            <span onClick={changeText}>{name}</span>
            <span onClick={changeView}>{svgIcons.listIcon}</span>
          </div>
        </div>
        <div>{todosMap}</div>
        <div className="my-4">
          {isCard ? VendorGridCard() : VendoListCard()}
        </div>
      </div>
    </Fragment>
  );
};

export const VendorGridCard = () => {
  return (
    <Fragment>
      <div
        className={`grid lg:grid-cols-3 md:grid-cols-2 xl:gap-x-6 xl:gap-y-6 overflow-hidden sm:grid md:grid sm:gap-x-6 sm:gap-y-6`}
      >
        {cardData?.map((card) => (
          <div
            className={`relative h-[270px] border mx-6 rounded-md group bg-white p-6`}
          >
            <div className="flex-shrink-0 border flex justify-center items-center border-secondary-300 rounded-md w-[130px] h-[90px]">
              <img
                className="h-[60px] w-[110px]  rounded-full object-contain"
                src="../assets/images/Marketplace-logo.png"
                alt=""
              />
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-medium w-[397px]">
                <button className="focus:outline-none">
                  {/* Extend touch target to entire panel */}
                  <span className="absolute inset-0" aria-hidden="true" />
                  {card.title}
                </button>
              </h3>
              <p className="mt-2 text-sm text-secondary-500 min-w-[auto] max-w-[397px] h-[62px]">
                you know mobile sentrix is everything for us.
              </p>
            </div>
            {/* Coming Soon Badge */}
            <span
              className="pr-8 pointer-events-none absolute top-6 right-6 text-secondary-300 group-hover:text-secondary-400"
              aria-hidden="true"
            >
              <Badges
                badgeBgColor="#DCFCE7"
                badgeTextColor="#166534"
                badgeContent="Coming Soon"
                textSize={"text-sm"}
                textWeight={"font-medium"}
                badgeWidth={"130px"}
              />
            </span>
            <span
              className="pointer-events-none absolute top-6 right-6 text-secondary-300 group-hover:text-secondary-400"
              aria-hidden="true"
            >
              {svgIcons.arrowUpRight}
            </span>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export const VendoListCard = () => {
  return (
    // {!isLoading ? VendorData?.map((data:any) => (
    <div className="mx-6 space-y-4">
      {cardData?.map((card) => (
        <div
          className="bg-white flex justify-between w-full h-[104px] items-center rounded-lg cursor-pointer hover:opacity-80"
          onClick={() => RedirectToVendorPage(card)}
        >
          <div className="flex items-center space-x-3 ml-6">
            <div className="flex-shrink-0 border p-1.5 border-secondary-300 rounded-md w-18 h-18">
              <img
                className="h-12 w-12 rounded-full object-contain"
                // src={data.logo || PlaceholderImg}
                src="../assets/images/placeholder-image.png"
                alt=""
              />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-lg font-medium text-secondary-700">
                <Link to="#">{card.title}</Link>
              </p>
              <p className="text-sm text-secondary-500">
                <Link to="/">
                  {/* {data.description.length > 100 ? data.description.slice(0,100) + "..." : data.description} */}
                  {card.title}
                </Link>
              </p>
            </div>
          </div>
          {/* External Link */}
          <div className="flex items-center mr-8">
            {/* {data?.isVisible === false ?
          <span className="mx-4"><Badges badgeBgColor="#DCFCE7" badgeTextColor="#166534" badgeContent="Coming Soon" textSize={'text-sm'} textWeight={'font-medium'} badgeWidth={'130px'} /></span>
          : ''
          } */}
            {svgIcons.arrowUpRight}
          </div>
        </div>
      ))}
    </div>
    // ))
    // :
    // <div className='flex-1'><SkeletonLoader skeletonType={'VendorListViewSkeleton'} defaultSkeletonHeight={''} smallInputWidth={''} smallInputHeight={''} /></div> // Skeleton Loader
    // }
  );
};

export default VendorCards;
