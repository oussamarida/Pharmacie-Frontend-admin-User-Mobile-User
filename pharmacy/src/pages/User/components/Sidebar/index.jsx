import React, {useEffect, useState} from 'react';
import './styles.css';
import logo from '../../assets/icons/test.jpg';
import LogoutIcon from '../../assets/icons/logout.svg';



function SideBar ({ handleToggleOrders , handleToggleProfile , handleshowGarde}) {
   


    return(
        <nav className='sidebar'>
            <div className='sidebar-container'>
                <div className='sidebar-logo-container'>
                    <img src={logo} alt="Logo Rocketseat" />    
                </div>

                <div className='sidebar-container'>
                    <div className='sidebar-items'>
                      
            
            <div   className={ 'sidebar-item-active'} style={{marginTop:20}} onClick={handleToggleOrders} >
            <img 
                
                src=""
                alt=""
                className='sidebar-item-icon' />
            <span className='sidebar-item-label'>Pharmacy</span>
  
            </div>

            <div   className={ 'sidebar-item-active'} style={{marginTop:20}} onClick={handleToggleProfile} >
            <img 
                
                src=""
                alt=""
                className='sidebar-item-icon' />
            <span className='sidebar-item-label'>Profil</span>
  
            </div>
            <div   className={ 'sidebar-item-active'} style={{marginTop:20}} onClick={handleshowGarde} >
            <img 
                
                src=""
                alt=""
                className='sidebar-item-icon' />
            <span className='sidebar-item-label'>Garde</span>
  
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