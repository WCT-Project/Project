import React, { useEffect } from 'react';

import Menu from "../component/menu";
import Login from "../component/Login";

const Register_Form = () => {
    useEffect(() => {
        // Reset Filter in local Storage
        localStorage.setItem('filter', JSON.stringify({
            "categories": [],
            "locations": [],
            "minBudget": 0.00,
            "maxBudget": 0.00
        }));
    }, []);
    return (
        <>
            <Menu />
            <Login />
        </>
    );
};

export default Register_Form