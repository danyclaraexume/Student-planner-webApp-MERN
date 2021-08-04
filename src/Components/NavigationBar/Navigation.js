import React from 'react'
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import {Link} from 'react-router-dom'
import HomeIcon from '@material-ui/icons/Home';
import ClassIcon from '@material-ui/icons/Class';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import SettingsIcon from '@material-ui/icons/Settings';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import './Navigation.css'


const Navigation = (props) => {
    return(
            <div className="navbar"> 
                <div className="closeButton">
                    <IconButton edge="start" aria-label="menu" onClick={props.handleHideMenu}>
                        <CloseIcon/>
                    </IconButton>
                </div>
                <div className="menuList">
                    <MenuList className='navbar-List' onClick={props.handleHideMenu} >
                        <MenuItem>
                            <Link to='/' className='menuLink'><HomeIcon className='menuIcon'/><span>Home</span></Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to='/class' className='menuLink'><ClassIcon className='menuIcon'/><span>Class</span></Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to='/progress' className='menuLink'><ShowChartIcon className='menuIcon'/><span>Progress</span></Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to='/settings' className='menuLink'><SettingsIcon className='menuIcon'/><span>Settings</span></Link>
                        </MenuItem>
                    </MenuList>
                </div>
               
            </div>
    )
}

export default Navigation