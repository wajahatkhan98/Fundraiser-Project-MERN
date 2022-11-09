import './App.css';
import React, { createContext, useReducer } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {
  Blog,
  Contact,
  Home,
  Investment,
  InvestNow,
  InvestorForm,
  LegalEntityInvestorForm,
  Login,
  Menu,
  Offices,
  Race,
  Registration,
  Shop,
  UserDashboard,
  WeAreJava,
} from './screens';
import { useContext } from 'react';

// import { initialState, reducer } from '../src/reducer/UseReducer';
import { Footer, Header } from './components';
import DashboardContent from './dashboard/Dashboard';
import WalletContent from './dashboard/Wallet';

import UserDetail from './dashboard/UserDetail';

export const UserContext = createContext();

const App = () => {
  // const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      {/* <UserContext.Provider value={{ state, dispatch }}> */}
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/we-are-java" element={<WeAreJava />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/offices" element={<Offices />} />
          <Route path="/investment" element={<Investment />} />
          <Route path="/race" element={<Race />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/invest-now" element={<InvestNow />} />
          <Route path="/login" element={<Login />} />
          <Route path="/investor" element={<InvestorForm />} />
          <Route
            path="/legal-entity-investor"
            element={<LegalEntityInvestorForm />}
          />
          <Route path="/registration" element={<Registration />} />
          {/* <ProctedRoute
            path="/dashboard"
            component={<DashboardContent />}
            auth={true}
          /> */}
          <Route path="/dashboard" element={<DashboardContent />} />
          <Route path="/wallet" element={<WalletContent />} />
          <Route path="/userdetails" element={<UserDetail />} />
        </Routes>
        <Footer />
      </Router>
      {/* </UserContext.Provider> */}
    </>
  );
};

export default App;
