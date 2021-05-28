import './App.css';
import React, {useState}  from 'react'
import {Grid} from '@material-ui/core'
import Navigation   from './Components/Navigation'
import HomePage     from './Views/HomeView/Home'
import ClassPage    from './Views/ClassRoomView/ClassContent'
import ProgressPage from './Views/ProgressView/ProgressContent'
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

function App() {
  const [showMenu, setShowMenu] = useState(true)
  let menu
  let larger
  if(showMenu){
    menu = <Navigation/>
    larger = 10
  }
  else {
    larger = 12
  }

  return (
    <Router>   
      <Grid container direction="column">
        <Grid item className='header'>
          <div>
            <AppBar position="static">
              <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => setShowMenu(!showMenu)}>
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6">
                  Effi-Study
                </Typography>
                <Button color="inherit">Login</Button>
              </Toolbar>
            </AppBar>
          </div>
        </Grid>
        <Grid item container>
          <Grid item xs = '2'className="leftsidebar">{menu}</Grid> 
          <Grid xs={larger} className='content'>
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
        <Grid item className='footer'><h1>Footer</h1></Grid>
      </Grid>
    </Router>
  );
}

export default App;
