import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Menu from '../component/menu';
import BudgetAnalysis from './budget_analysis'
import Home from './home'
import Recommendation from './recommendations_page';


const ParentComponent = () => {
  return (
      <BrowserRouter>       
          <Routes path='/' element={<Home />}>
              {/* <Route path="/"  />   */}
              <Route path="/recommendation" element={<Recommendation />}/>
              <Route path="/budget_analysis" element={<BudgetAnalysis />} />
              {/* <Route path="contact" element={<Contact />} /> */}             
          </Routes>
      </BrowserRouter>
  );
};

export default ParentComponent;