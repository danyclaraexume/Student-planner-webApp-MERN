import React, {useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const PageTabs = (props) => {
    const [selectedTab, setSelectedTab] = useState(0);

    const handleChange = (event, newValue) => {
        setSelectedTab(newValue);
    };

    return (
        <div>
            <AppBar position="static">
                <Tabs value={selectedTab} onChange={handleChange}>
                    {props.label.map((tabLabel) => (
                        <Tab key={Math.random().toString()} label={tabLabel}/>
                    ))};
                </Tabs>
            </AppBar>
            {props.content.map((tabContent) => (
                <div key={Math.random().toString()} value={selectedTab}>
                    {(props.content.indexOf(tabContent) === selectedTab) && tabContent}
                </div>
                
            ))}
        </div>
    );
}

export default PageTabs;
