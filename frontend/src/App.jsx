import Cart from "./pages/Cart/Cart";
import Footer from "./component/Footer/Footer";
import Home from "./pages/Home/Home";
import LoginPopup from "./component/LoginPopup/LoginPopup";
import Navbar from "./component/Navbar/Navbar";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  const [showLogin,setShowLogin] = useState(false)
  return (
    <>
    {showLogin?<LoginPopup/>:<></>}
    <div className='app'>
      <Router>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/Home' element={<Home />} />
          <Route path='/Cart' element={<Cart />} />
          <Route path='/PlaceOrder' element={<PlaceOrder />} />
        </Routes>
      </Router>
    </div>
    <Footer/>
    </>
  );
};

export default App;
