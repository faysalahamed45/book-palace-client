import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userCreate } from '../../App';
import './Header.css';

const Header = (props) => {
    const [loggedInUser, setLoggedInUser] = useContext(userCreate);
    console.log(props.userName);
    return (
        <div>
            <nav className="navbar  navbar-expand-lg navbar-light container pl-0 pe-0 ">
                <div className="container-fluid p-0">
                    <a className="navbar-brand nav-brand" href="#">BOOK-PALACE</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto nav-link">
                            <Link to="/home">Home</Link>
                            <Link to="/order">Orders</Link>
                            <Link to="/admin">Admin</Link>
                            <Link to="/checkout">Checkout</Link>
                            {/* {props.newUser?  <Link className="active" to="/login">Login</Link>:<p>{props.user}</p>} */}

                            {props.success ? <h4 style={{ display: "inline-block" }}>{props.userName}</h4> : <Link className="active" to="/login">Login</Link>}

                            {
                                props.success &&
                                <button onClick={() => setLoggedInUser({})}><i className="fas fa-sign-out-alt "></i></button>
                            }
                        </div>
                    </div>
                </div>
            </nav>





        </div>
    );
};

export default Header;