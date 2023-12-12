import React from 'react';
import Menu from '../component/menu';
import BudgetAnalyzer from '../component/budget_anlyzer';
import Category from '../component/category';
import Show_Place_Province from '../component/Show_Place_Province';

const BudgetAnalysis = () => {
  return (
      <div>
          <Menu />
          <Category />
          <Show_Place_Province />
      </div>
  );
};

export default BudgetAnalysis;