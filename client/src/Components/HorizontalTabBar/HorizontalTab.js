import React, {useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import './HorizontalTab.css'
import { Toolbar } from '@material-ui/core';

const TabBar = (props) => {
    const [selectedTab, setSelectedTab] = useState(1);

    const handleChange = (event, newValue) => {
        setSelectedTab(newValue);
    };

    return (
        <div  className="tabBar-container">
            <AppBar className="tabBar" style={
                    {
                        position:'sticky', 
                        backgroundColor:'rgb(39, 43, 46)', 
                        boxShadow: '2px 2px 2px 2px dark-grey',
                        zIndex: 1
                    }
                }>
                <Toolbar  style={{display:'flex', justifyContent:'center'}}>
                    <Tabs value={selectedTab} onChange={handleChange}>
                        {props.label.map((tabLabel) => (
                            <Tab key={Math.random().toString()} label={tabLabel}/>
                        ))};
                    </Tabs>
                </Toolbar>
            </AppBar>
            <div className="tabContent">
                {props.content.map((tabContent) => (
                    <div key={Math.random().toString()}>
                        {(props.content.indexOf(tabContent) === selectedTab) && tabContent}
                    </div>                
                ))}
            </div>
            
        </div>
    );
}

export default TabBar;
