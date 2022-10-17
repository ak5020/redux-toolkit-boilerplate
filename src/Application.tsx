import React from "react";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BaseLayout } from "./layout/BaseLayout";
import { MarketplaceHome } from "./pages/MarketplaceHome";


const App = () => (
  <Router>
        {/* <Auth> */}
          <BaseLayout>
            <Routes>
              <Route path="/" element={<MarketplaceHome />} />;
              {/* <Route path={VendorSpecificRoute} element={<VendorHomePage />} />;
              <Route path={VendorSpecificRoute + "/:id"} element={<ProductPage />} /> */}
              {/* <Route path={VendorSpecificRoute + "/seeAll"} element={<SeeAllProductsPage />} />; */}
              {/* <Route path="/orders" element={<OrderPage />} />
              <Route path={VendorSpecificRoute + "/search/:id"} element={<SearchPage />} />;
              <Route
                path="/checkoutcompleted"
                element={<CheckoutModal />}
              />
              ;
              <Route path="*" element={<PageNotFound />} />; */}
            </Routes>
          </BaseLayout>
        {/* </Auth> */}
      </Router>
);

export default App