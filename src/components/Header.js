import reactLogo from "../../Images/foodWebsiteLogo.png";
import { useState } from "react";

const Header = () =>{

    const [btnName,setbtnName]= useState("Login");
    
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={reactLogo} alt="react-logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
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