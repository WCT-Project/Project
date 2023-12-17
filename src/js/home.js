import React from 'react';
import Menu from '../component/menu';
import BudgetAnalyzer from '../component/budget_anlyzer';
import Banner from '../component/banner';
import Category from '../component/category';
import Show_Place_Province from '../component/Show_Place_Province';
import Footer_menu from '../component/footer_menu';

const Home = () => {
  return (
      <div>
        {/* <Menu /> */}
        <div width="100%">
          <Banner />
        </div>
        <BudgetAnalyzer/>
        <Category />
        {/* <Show_Place_Province /> */}
        <Footer_menu />
      </div>
  );
};

export default Home;