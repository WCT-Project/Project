import React, { createContext, useContext, useState , useEffect } from 'react';

import $ from 'jquery'


// Create a context with default values
const LoginContext = createContext({
    isLoggedIn: false,
    userName: '',
    email: '',
    password: '',
    login: () => {

    },
    logout: () => {

    },
});

// Create a provider component
export const LoginProvider = ({ children }) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const login = async (email, password) => {

        try {
            const response = await $.ajax({
                url: 'http://127.0.0.1:5000/user/authenticate',
                type: 'POST',
                dataType: 'json',
                contentType: 'application/json',
                data: JSON.stringify({
                    email: email,
                    password: password,
                }),
            });
    
            console.log(response);
    
            if (response.status) {
                var user = response.user;
                setIsLoggedIn(true);                  
                setIsAdmin(user.is_admin);
                setUserName(user.name);
                setEmail(user.email);
                setPassword(user.password);
    
                // Now, you can log the updated state values
                console.log('handler', isLoggedIn, userName);
            } else {
                setIsLoggedIn(false);
            }
        } catch (error) {
            console.error('Something Went Wrong:', error);
            setIsLoggedIn(false);
        }
    };

    const logout = () => {
        // Perform logout logic
        setIsLoggedIn(false);
        setIsAdmin(false)
    };

    useEffect(() => {
        console.log('handler use effect', isLoggedIn, userName);
    }, [isLoggedIn, userName]);
      

    return (
        <LoginContext.Provider value={{isLoggedIn, isAdmin, userName, email, password, login, logout}}>
            {children}
        </LoginContext.Provider>
    );
};

// Custom hook to consume the LoginContext
export const useLogin = () => {
  return useContext(LoginContext);
};
