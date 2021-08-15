import './App.css';
import React, {useState}  from 'react'
import {Grid} from '@material-ui/core'
import AppBar       from '@material-ui/core/AppBar';
import Toolbar      from '@material-ui/core/Toolbar';
import Typography   from '@material-ui/core/Typography';
import Button       from '@material-ui/core/Button';
import IconButton   from '@material-ui/core/IconButton';
import MenuIcon     from '@material-ui/icons/Menu';

import {
  BrowserRouter as Router,
  Switch,
  Route
 } from 'react-router-dom'

import Navigation   from './Components/NavigationBar/Navigation'
import HomePage     from './Views/HomeView/Home'
import ClassPage    from './Views/ClassRoomView/ClassContent'
import ProgressPage from './Views/ProgressView/ProgressContent'
// import Header       from './Components/Header/Header'

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const larger = 12;
  const menuWidth = 2;

  const handleHideMenu = () => {
    setShowMenu(!showMenu);
  }

  return (
    <Router>   
      <Grid container direction="column">
        <Grid item className='header' onClick={showMenu && handleHideMenu}>
          <div>
            <AppBar position="static"  style={{background: 'linear-gradient(rgb(39, 43, 46),rgb(49, 64, 75))'}}>
              <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleHideMenu}>
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" style={{width:'70%', textAlign:'center'}}>
                  Effi-Study
                </Typography>
                <Button color="inherit" style={{float:'right',width:'30%', paddingLeft:'20%', paddingRight: '1%'}}>Login</Button>
              </Toolbar>
            </AppBar>
          </div>
        </Grid>
        <Grid item container >
          <Grid item xs ={menuWidth} className={showMenu ? "leftsidebar active": "leftsidebar"}><Navigation handleHideMenu = {handleHideMenu} /></Grid> 
          <Grid item xs={larger} className='content' onClick={showMenu && handleHideMenu}>
            <Switch>
              <Route exact path='/'>
                  <HomePage/>
              </Route>
              <Route path='/class'>
                  <ClassPage/>
              </Route>
              <Route path='/progress'>
                  <ProgressPage/>
              </Route>
              <Route path='/settings'>

              </Route>
            </Switch>
          </Grid>
        </Grid>
        <Grid item className='footer' onClick={showMenu && handleHideMenu}><h1>Footer</h1></Grid>
      </Grid>
    </Router>
  );
}

export default (App);
