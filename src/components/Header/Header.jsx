import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import  { AuthContext } from '../Providers/AuthProvider';
const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    // console.log('user',user)
    const handlelogOut = () => {
        logOut()
        .then((result)=>{

        })
        .catch((error) => {
            console.error(error);
        })
    };
    return (
        <nav className='header'>
            <img src={logo} alt="logo" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Order</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/login">LogIn</Link>
                <Link to="/signup">SignUp</Link>
                {
                    user && <span className='user-name'> {user.email} <button onClick={handlelogOut}>Sign Out</button></span>
                }

            </div>

        </nav>
    )
}

export default Header