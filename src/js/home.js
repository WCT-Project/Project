import React from 'react';
import Menu from '../component/menu';
import BudgetAnalyzer from '../component/budget_anlyzer';
import Category from '../component/category';

const BudgetAnalysis = () => {
  return (
      <div>
          <Menu />
          <BudgetAnalyzer />
          <Category />
      </div>
  );
};

export default BudgetAnalysis;