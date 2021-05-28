// import React, {useState} from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const Header = () => {
    // const [showMenu, setShowMenu] = useState(false)
    
    return(
      <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" style={{backgroundColor:'LightSkyBlue'}}>
              Effi-Study
            </Typography>
            <Button edge="end" style={{backgroundColor:'LightSkyBlue'}}>Login</Button>
          </Toolbar>
        </AppBar>
      </div>
    )
}

export default Header