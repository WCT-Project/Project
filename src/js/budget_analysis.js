import React from 'react';
import Menu from '../component/menu';
import BudgetAnalyzer from '../component/budget_anlyzer';
import Category from '../component/category';
import Show_Place_Province from '../component/Show_Place_Province';

const BudgetAnalysis = () => {
  return (
      <div className="root">
          <Menu />
          <body>
            <BudgetAnalyzer/>
            <Category />
            <Show_Place_Province />
          </body>
      </div>
  );
};

export default BudgetAnalysis;