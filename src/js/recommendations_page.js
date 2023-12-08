import React from "react";
import Menu  from "../component/menu";
import BudgetAnalyzer from '../component/budget_anlyzer';
import Category from '../component/category';
import Show_Place_Province from '../component/Show_Place_Province';
import BudgetAnalysis from "./budget_analysis";
import Show_Recommendation  from "../component/recommendation";


function recommendation_func()   {
    return  (
        <div>
          <Menu />      
          <Show_Recommendation />
          <Show_Place_Province />
        </div>
    )
}


const Recommendation = recommendation_func;
export default Recommendation;