import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.scss';
// import Home from './pages/Home';
//import Aboutus from './pages/Aboutus';
//import Contantus from './pages/Contactus';
//import Productlst from "./pages/Product_lst";
//import Productdetails from "./pages/Product_detail";
//import Errorpage from './pages/Err_page';
import Emptyoutlet from "./components/common/Outlet";
import PageLoader from "./components/common/PageLoader";
const LazyHome = React.lazy(() => import('./pages/Home'));
const LazyAboutus = React.lazy(() => import('./pages/Aboutus'));
const LazyContantus = React.lazy(() => import('./pages/Contactus'));
const LazyProductlst = React.lazy(() => import('./pages/Product_lst'));
const LazyProductdetails = React.lazy(() => import('./pages/Product_detail'));
const LazyErrorpage = React.lazy(() => import('./pages/Err_page'));


function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <Routes>

          <Route path="/" element={<Emptyoutlet />} >
            <Route index element={<LazyHome />} />
            <Route path="about" element={<LazyAboutus />} />
            <Route path="contact" element={<LazyContantus />} />
            <Route path="product" element={<Emptyoutlet />}>
              <Route index="2" element={<LazyProductlst />} />
              <Route path=":id" element={<LazyProductdetails />} />
            </Route>
            <Route path="*" element={<LazyErrorpage />} />
          </Route>

        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;



