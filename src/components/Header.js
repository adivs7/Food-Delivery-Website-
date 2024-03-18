import reactLogo from "../../Images/foodWebsiteLogo.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () =>{

    const [btnName,setbtnName]= useState("Login");
    
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={reactLogo} alt="react-logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/About">About Us</Link>
                    </li>
                    <li>
                        <Link to="/Contact">Contact Us</Link>
                    </li>
                    <li>Cart</li>
                    <button onClick={()=>
                    (btnName=="Login")? setbtnName("Logout")
                     :setbtnName("Login")
                    }>
                        {btnName}
                    </button>

                 </ul>
            </div>
        
        </div>
    )
}

export default Header;