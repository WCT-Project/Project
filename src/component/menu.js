import '../css/menu.css';

function Menu() {
  return (
    <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light border-header">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><b><span>Trip</span><span>Wallet</span></b></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#"><span>Home</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#"><span className="XXBudget-AnalysisXX">Budget Analysis</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#"><span>Recommendations</span></a>
                        </li>
                        <li className="nav-item nav-LOGIN-REGISTER">
                            <a className="nav-link" href="#"><span className="login">LOGIN/REGISTER</span></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
  );
}

export default Menu;
