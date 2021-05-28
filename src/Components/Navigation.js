import React from 'react'
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import {Link} from 'react-router-dom'
import HomeIcon from '@material-ui/icons/Home';
import ClassIcon from '@material-ui/icons/Class';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import SettingsIcon from '@material-ui/icons/Settings';
import './Navigation.css'


const Navigation = () =>{
    return(
            <Paper> 
                <MenuList className='menu'>
                    <MenuItem >
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
            </Paper>
    )
}

export default Navigation