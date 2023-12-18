import {BrowserRouter, Routes, Route} from "react-router-dom";
import { createContext, useContext, useState , React} from 'react';

import Menu from '../component/menu';
import BudgetAnalysis from './budget_analysis'
import Home from './home'
import Recommendation from './recommendations_page';
import Register_Form from './Loginpage';
import Registers_Form from './Registerpge';




const ParentComponent = () => {
  const AuthContext = createContext();

  const [authenticated, setAuthenticated] = useState(false);

  return (
      <BrowserRouter>       
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/recommendation" element={<Recommendation />}/>
            <Route path="/budget_analysis" element={<BudgetAnalysis />} />
            <Route path="/login" element={<Register_Form />} />
            <Route path="/register" element={<Registers_Form />} />
        </Routes>

      </BrowserRouter>
  );
};

export default ParentComponent;