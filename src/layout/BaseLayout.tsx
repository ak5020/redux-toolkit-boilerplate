import { BackTop } from "antd";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

export const BaseLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="mp-header">
        <Header />
      </div>
      <div className="mp-pages">{children}</div>
      <div className="mp-top-icon flex justify-end mr-6">
        <BackTop>
          <span>
            <img
              className="bg-teal-600 cursor-pointer p-[7px] w-[40px] h-[40px] rounded-full"
              src={"../assets/images/Group.svg"}
              alt=""
            />
          </span>
        </BackTop>
      </div>
      <div className="mp-footer flex grow flex-col justify-end">
        <Footer />
      </div>
    </div>
  );
};
