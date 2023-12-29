import { Link, useLocation } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';

import { useLogin } from '../js/LoginHandler';
import '../css/menu.css';


function Menu() {
    const location = useLocation();

    const {isLoggedIn, isAdmin, userName, login, logout} = useLogin();
    
    // console.log(userName, isLoggedIn)

    // Function to determine if a menu item is active
    const isMenuActive = (menuName) => {
      return location.pathname === `/${menuName}`;
    };

    
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light border-header" id="dynamic-nav">
                <div className="container-fluid menu-container">
                    <a className="navbar-brand" href="#"><b><span>Trip</span><span>Wallet</span></b></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/" className={`nav-link ${isMenuActive('') ? 'active-menu' : ''}`} aria-current="page">
                                    <span className={`menuitem ${isMenuActive('') ? 'active-menu-span' : ''}`} data-menu-name="home">Home</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/budget_analysis" className={`nav-link ${isMenuActive('budget_analysis') ? 'active-menu' : ''}`} aria-current="page">
                                    <span className={`menuitem ${isMenuActive('budget_analysis') ? 'active-menu-span' : ''}`} data-menu-name="budget_analysis">Budget Analysis</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/recommendation" className={`nav-link ${isMenuActive('recommendation') ? 'active-menu' : ''}`} aria-current="page">
                                    <span className={`menuitem ${isMenuActive('recommendation') ? 'active-menu-span' : ''}`} data-menu-name="recommendation">Recommendations</span>
                                </Link>
                            </li>
                            <li className={`nav-item ${!isLoggedIn ? 'nav-LOGIN-REGISTER' : 'nav-LOGGED-IN'}`}>
                                {!isLoggedIn ? (
                                        <Link to="/login" className="nav-link" aria-current="page">
                                            <span className="login">Login / Register</span>
                                        </Link>
                                    ) : (
                                        <Dropdown style={{ backgroundColor: 'black' }}>
                                            <Dropdown.Toggle variant="success" id="user-dropdown">
                                                <i className="fa fa-user" style={{ marginRight: '5px' }} /> {userName}
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                {/* Add dropdown menu items here */}
                                                <Dropdown.Item href="#/profile">Profile</Dropdown.Item>
                                                <Dropdown.Divider />
                                                <Dropdown.Item href="#/logout">Logout</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                       
                                    )
                                }
                              
                                
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Menu;