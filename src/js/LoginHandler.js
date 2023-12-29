import React, { createContext, useContext, useState , useEffect } from 'react';

import $ from 'jquery'


// Create a context with default values
const LoginContext = createContext({
    isLoggedIn: false,
    isAdmin: false,
    userName: '',
    email: '',
    password: '',
    login: () => {

    },
    logout: () => {

    },
    register: () => {

    }
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
    
            // console.log(response);
    
            if (response.status) {
                var user = response.user;
                localStorage.setItem('user', JSON.stringify(response.user));
                setIsLoggedIn(true);
                setIsAdmin(user.is_admin);
                setUserName(user.name);
                setEmail(user.email);
                setPassword(user.password);

            } else {
                setIsLoggedIn(false);
            }
            return response
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

    const register = async (username, email, password) => {

        try {
            const response = await $.ajax({
                url: 'http://127.0.0.1:5000/user/create',
                type: 'POST',
                dataType: 'json',
                contentType: 'application/json',
                data: JSON.stringify({
                    name: username,
                    email: email,
                    password: password,
                }),
            });
            return response;

        } catch (error) {
            console.error('Something Went Wrong:', error);
            setIsLoggedIn(false);
        }
    };
    

    useEffect(() => {
        // console.log('handler use effect', isLoggedIn, userName);
    }, [isLoggedIn, userName]);
      

    return (
        <LoginContext.Provider value={{isLoggedIn, isAdmin, userName, email, password, login, logout, register}}>
            {children}
        </LoginContext.Provider>
    );
};

// Custom hook to consume the LoginContext
export const useLogin = () => {
  return useContext(LoginContext);
};
