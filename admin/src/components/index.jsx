import React, {useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';
import './styles.css';
import logo from '../assets/icons/white-logo.jpg';
import LogoutIcon from '../assets/icons/logout.svg';
import Ville from '../assets/icons/ville.png';
import Zone from '../assets/icons/zone.png';


function SideBar ({ handlesetshowVille , handleshowZone }) {
   


    return(
        <nav className='sidebar'>
            <div className='sidebar-container'>
                <div className='sidebar-logo-container'>
                    <img src={logo} alt="Logo Rocketseat" />    
                </div>

                <div className='sidebar-container'>
                    <div className='sidebar-items'>
                      
            
            <div   className={ 'sidebar-item-active'} onClick={handlesetshowVille} >
            <img 
                
                src={Ville}
                alt={`icon-${Ville}`}
                className='sidebar-item-icon' />
            <span className='sidebar-item-label'>Ville</span>
  
            </div>

            <div   className={ 'sidebar-item-active'} onClick={handleshowZone} >
            <img 
                
                src={Zone}
                alt={`icon-${Zone}`}
                className='sidebar-item-icon' />
            <span className='sidebar-item-label'>Zone</span>
  
            </div>
           
              
           
                    </div>
                    <div className='sidebar-footer'>
                    <a href='/login'>
                       <span className='sidebar-item-label'>Logout</span>
                       </a>
                        <img 
                            src={LogoutIcon}
                            alt='icon-logout'
                            className='sidebar-item-icon' />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default SideBar;