import React ,{ Component} from "react";
import {Link} from "react-router-dom";
class Header extends Component{
    render(){
         return(
            //  header start
            <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-4">
            <div className="container">
                <a className="navbar-brand" href="Dashboard.html">
                    Bug Tracker
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="mobile-nav">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/bugDashboard">
                                Bugs
                            </Link>
                        </li>
                    </ul><ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/employeeDashboard">
                                Employee
                            </Link>
                        </li>
                    </ul><ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/projectDashboard">
                                Projects
                            </Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link " href="register.html">
                                Sign Up
                            </a>
                        </li>
                        <li className="nav-item">
                        <a class="nav-link" to="LoginPage.html">
                                Login
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        // header end
         )
    }
}

export default Header;