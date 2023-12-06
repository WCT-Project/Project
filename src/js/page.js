import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import BudgetAnalysis from './budget_analysis'
import Home from './home'


const ParentComponent = () => {
  return (
    <div>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home />}>
                <Route path="/home" element={<Home />} />
                <Route path="/budgetanalysis" element={<BudgetAnalysis />} />
                {/* <Route path="contact" element={<Contact />} /> */}
              </Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
};

export default ParentComponent;