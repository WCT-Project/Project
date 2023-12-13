import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Menu from '../component/menu';
import BudgetAnalysis from './budget_analysis'
import Home from './home'
import Recommendation from './recommendations_page';
import Register_Form from './Register_Form';


const ParentComponent = () => {
  return (
      <BrowserRouter>       
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/recommendation" element={<Recommendation />}/>
            <Route path="/budget_analysis" element={<BudgetAnalysis />} />
            <Route path="/login" element={<Register_Form />} />
        </Routes>

      </BrowserRouter>
  );
};

export default ParentComponent;