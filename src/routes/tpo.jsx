import React, { useState } from "react";
import "../components/student/sidebarStu.css";
import {GoPerson} from 'react-icons/go';
import {RiProfileLine, RiLogoutBoxLine} from 'react-icons/ri'
import StuHome from "../components/student/stuHome";
// import { Header } from "../components/home/Header";
import { Logo } from "../components/Logo";
import {MdAppRegistration} from 'react-icons/md';
import { icons } from "react-icons";

const TPO = () => {
  const [active,setActive] = useState("Profile");
  return (
    <div className="container">
      <div className="sidebar">
        <div className="sidebar-hearder">
          
          <p className="logo">{<Logo/>}</p>
          
        </div>
  
        {/* <div className="sidebar-hearder">
          <img className="logo1" alt="logo" />
          <p className="sidebar-name sidebar-text1">Placement Keeda</p>
          <hr style={{ borderColor: "#6A7B92"}} />
        </div> */}

        <div className="sidebar-items">
          {/* <div className="items">
            <IoMdHome className="sidebar-text" />
            <span className="sidebar-text1" onClick={()=> setActive("Home")}>Home</span>
          </div> */}

          <div className="items">
          <GoPerson className="sidebar-text"/>
            <span className="sidebar-text1" onClick={()=> setActive("Profile")}>Profile</span>
          </div>

          <div className="items">
              <RiProfileLine className="sidebar-text"/>

            <span className="sidebar-text1">Drives</span>
          
          </div>


          <div>
          
            <div className="items">
            
                <MdAppRegistration className="sidebar-text" /> 

              <span className="sidebar-text1">Registered Companies</span>
            
            </div>

            <div className="items">
            
                <RiLogoutBoxLine className="sidebar-text" /> 

              <span className="sidebar-text1">Logout</span>
            
            </div>
          </div>
        </div>
        
      </div>
      <div className="home">{active === "Home" && <StuHome/>}</div>
    </div>
  );
};

export default TPO;
