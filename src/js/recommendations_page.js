import React from "react";
import Menu  from "../component/menu";
import BudgetAnalyzer from '../component/budget_anlyzer';
import Category from '../component/category';
import Show_Place_Province from '../component/Show_Place_Province';
import BudgetAnalysis from "./budget_analysis";
import City_Recommend  from "../component/city_recommend";




const Recommendation = () => {
  return (
    <div>
      <Menu />      
      <City_Recommend />
    </div>
  );
};

export default Recommendation;