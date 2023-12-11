import React from 'react';
import Menu from '../component/menu';
import BudgetAnalyzer from '../component/budget_anlyzer';
import Category from '../component/category';
import Show_Place_Province from '../component/Show_Place_Province';
import BudgetAnalysis from './budget_analysis';
import Recommendation from './recommendations_page';

const Home = () => {
  return (
      <div>
        <BudgetAnalysis />
      </div>
  );
};

export default Home;